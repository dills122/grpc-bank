const { clientFactory } = require("grpc-test");
const config = require("./src/proto.config");

const { Greeter } = config.Services;

clientFactory(Greeter.protoPath, Greeter.serviceName, Greeter.namespace).then((client) => {
    client.SayHello({ name: "Dylan" }, (err, resp) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log(resp);
    });
}).catch((err) => {
    console.log(err);
    process.exit(1);
});