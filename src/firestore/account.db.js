const dbFactory = require("./db-factory");
const collection = "accounts";
const db = dbFactory();

module.exports = {
    Create: (model) => {
        return db.collection(collection).doc(model.bankId).set(model);
    },
    Get: (bankId) => {
        return db.collection(collection).doc(bankId).get();
    },
    Archive: (bankId) => {
        db.collection(collection).doc(bankId).update({
            archive: true
        });
    },
    UpdateBalance: async (bankId, amount) => {
        let record = await this.Get(bankId);
        db.collection(collection).doc(bankId).update({
            balance: record.data.balance + amount
        });
    }
};