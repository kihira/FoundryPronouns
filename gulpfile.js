var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

function typescript()
{
    return tsProject
        .src()
        .pipe(tsProject())
        .js.pipe(dest("dist"));
}

function package()
{
    
}

exports.typescript = typescript;