const uuid = require("uuid/v4");
const dbFactory = require("./db-factory");
const collection = "clients";
const db = dbFactory();

module.exports = {
    Create: async (model) => {
        let clientId = uuid();
        await db.collection(collection).doc(`${clientId}`).set({clientId, ...model});
        return clientId;
    },
    Get: (clientId) => {
        return db.collection(collection).doc(`${clientId}`).get();
    },
    Archive: (clientId) => {
        db.collection(collection).doc(clientId).update({
            archive: true
        });
        return clientId;
    }
};