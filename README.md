## Requirements
- NodeJS 14.x

### Local Development
You don't need to clone this module into your local modules folder, instead there is the gulp `localDeploy` task to copy the generated files into your local modules folder.

We automatically attempt to detect the FoundryVTT data directory, first checking if `FOUNDRY_VTT_DATA_PATH` is set, before then checking the default OS application data paths. These can be seen on https://foundryvtt.com/article/configuration/.

If it still not detected, or you have a different path you want to use, you can create a `.env` file in the root of this repo and set `FOUNDRY_VTT_DATA_PATH` to the path you want. It will need a valid FoundryVTT folder layout (so it will need a `Data` folder, which contains `modules`, `systems` etc).