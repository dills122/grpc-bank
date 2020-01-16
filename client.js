const { clientFactory } = require("grpc-test");
const config = require("./src/proto.config");
const async = require("async");

const { Greeter, ClientService } = config.Services;

clientFactory(ClientService.protoPath, ClientService.serviceName, ClientService.namespace).then((client) => {
    // client.SayHello({ name: "Dylan" }, (err, resp) => {
    //     if (err) {
    //         console.log(err);
    //         process.exit(1);
    //     }
    //     console.log(resp);
    // });
    CreateAndGetClient(client, (err) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
    });
}).catch((err) => {
    console.log(err);
    process.exit(1);
});

function CreateAndGetClient(client, callback) {
    async.waterfall([
        (cb) => {
            client.Create({
                firstName: "Dylan",
                lastName: "Steele",
                city: "Detroit"
            }, (err, record) => {
                if (err) {
                    console.log(err);
                    return cb(err);
                }
                return cb(null, record);
            });
        },
        (record, cb) => {
            let { clientId } = record;
            client.Get({ clientId }, (err, clientRecord) => {
                if (err) {
                    return cb(err);
                }
                console.log("Client Record");
                console.log(clientRecord);
                return cb(null, clientRecord);
            });
        },
        (record, cb) => {
            let { clientId } = record;
            client.Archive({ clientId }, (err, result) => {
                if (err) {
                    return cb(err);
                }
                console.log(`The action was ${clientId === result.clientId}`);
                return cb();
            })
        }
    ], (err, result) => {
        if (err) {
            console.log(err);
            return callback(err);
        }
        return callback();
    });
}