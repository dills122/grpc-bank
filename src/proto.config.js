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
        }
    }
};

function globalFilePaths(path) {
    return join(__dirname, protoDefinitionPath, path);
} 