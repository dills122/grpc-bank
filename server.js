const createServer = require("grpc-test");
const config = require("./src/proto.config");

createServer.serverFactory(config).then(() => {

}).catch((err) => {
    console.log(err);
    process.exit(1);
});