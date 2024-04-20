const staticFile = require("../appModules/http-utils/static-file");
const{ getData, endpoints } = require("../appModules/api");

async function mainRouteController(res, publicUrl, extname) {
    const data = await getData(endpoints.games);
    console.log(data);
    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
}
module.exports = mainRouteController;