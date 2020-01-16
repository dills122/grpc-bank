const { join } = require("path");
const protoDefinitionPath = "protos";
module.exports = {
    protoDefinitionPath,
    Services: {
        Greeter: {
            protoPath: globalFilePaths('/greeter.proto'),
            namespace: 'helloworld',
            serviceName: 'Greeter',
            serviceDefinitions: require("./service-definitions/greeter.service")
        },
        BankAccount: {
            protoPath: globalFilePaths("/bank-account.proto"),
            namespace: "grpcBank",
            serviceName: "BankAccount",
            serviceDefinitions: require("./service-definitions/bank-account.service")
        },
        Client: {
            protoPath: globalFilePaths("/client.proto"),
            namespace: "grpcBank",
            serviceName: "Client",
            serviceDefinitions: require("./service-definitions/client.service")
        },
        Transaction: {
            protoPath: globalFilePaths("/transaction.proto"),
            namespace: "grpcBank",
            serviceName: "Transaction",
            serviceDefinitions: require("./service-definitions/transaction.service")
        }
    },
};

function globalFilePaths(path) {
    return join(__dirname, protoDefinitionPath, path);
} 