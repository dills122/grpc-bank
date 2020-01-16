const { join } = require("path");
const protoDefinitionPath = "protos";
module.exports = {
    protoDefinitionPath,
    Services: {
        GreeterService: {
            protoPath: globalFilePaths('/greeter.proto'),
            namespace: 'helloworld',
            serviceName: 'GreeterService',
            serviceDefinitions: require("./service-definitions/greeter.service")
        },
        BankAccountService: {
            protoPath: globalFilePaths("/bank-account.proto"),
            namespace: "grpcBank",
            serviceName: "BankAccountService",
            serviceDefinitions: require("./service-definitions/bank-account.service")
        },
        ClientService: {
            protoPath: globalFilePaths("/client.proto"),
            namespace: "grpcBank",
            serviceName: "ClientService",
            serviceDefinitions: require("./service-definitions/client.service")
        },
        TransactionService: {
            protoPath: globalFilePaths("/transaction.proto"),
            namespace: "grpcBank",
            serviceName: "TransactionService",
            serviceDefinitions: require("./service-definitions/transaction.service")
        }
    },
};

function globalFilePaths(path) {
    return join(__dirname, protoDefinitionPath, path);
} 