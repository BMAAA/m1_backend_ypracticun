const mainRouteController = require("./controllers/main");
const defaultRouteController = require("./controllers/default");
const staticFile = require("./appModules/http-utils/static-file")
const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            defaultRouteController(res, "/index.html");
        default:
            defaultRouteController(res, url);
            console.log(url)
    }
});

server.listen(3005);