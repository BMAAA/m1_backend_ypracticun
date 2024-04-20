const mainRouteController = require("./controllers/main");
const defaultRouteController = require("./controllers/default");
const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");
            break;
        default:
            defaultRouteController(res, url);
            console.log(url)
    }
});

server.listen(3005);