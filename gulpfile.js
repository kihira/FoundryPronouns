const { parallel, series, src, dest } = require("gulp");
const { createProject } = require("gulp-typescript");
const { existsSync } = require("fs");

require("dotenv").config();

function typescript()
{
    const tsProject = createProject("tsconfig.json");

    return tsProject
        .src()
        .pipe(tsProject())
        .js.pipe(dest("dist"));
}

function styles()
{
    return src("src/styles/**")
        .pipe(dest("dist/styles"));
}

function copyModuleJson()
{
    return src("src/module.json")
        .pipe(dest("dist"));
}

function copyLang()
{
    return src("src/lang/**")
        .pipe(dest("dist/lang"));
}

function localDeploy()
{
    var foundryDataDir = null;
    const foundryDataDirs = [
        process.env.FOUNDRY_VTT_DATA_PATH,
        `${process.env.LOCALAPPDATA}/FoundryVTT`,
        `~/Library/Application Support/FoundryVTT`,
        `${process.env.HOME}/.local/share/FoundryVTT`,
        `${process.env.HOME}/FoundryVTT`,
        `/local/FoundryVTT`,
    ];

    foundryDataDirs.forEach(dir => {
        if (dir !== undefined && existsSync(dir) && existsSync(`${dir}/Data/modules`))
        {
            foundryDataDir = dir;
        }
    });

    if (foundryDataDir === undefined || foundryDataDir === null || foundryDataDir.length === 0)
    {
        throw "Foundry user data directory not found! Refer to README for instructions";
    }

    const foundryModuleDir = `${foundryDataDir}/Data/modules/foundrypronouns`;
    return src("dist/**")
        .pipe(dest(foundryModuleDir));
}

exports.localDeploy = series(parallel(styles, copyModuleJson, copyLang), localDeploy);
exports.typescript = typescript;
