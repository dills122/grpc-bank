const dbFactory = require("./db-factory");
const collection = "accounts";
const db = dbFactory();
const _ = require("lodash");

module.exports = {
    Create: (bankId, amount, postDate) => {
        return db.collection(collection).doc(bankId).set(
            {
                transactions: {
                    bankId,
                    amount,
                    postDate
                }
            },
            { merge: true }
        );
    },
    GetAll: async (bankId) => {
        let record = await db.collection(collection).doc(bankId).get();
        return _.get(record, 'transactions');
    },
    Get: async (bankId, transactionId) => {
        let transactions = await this.GetAll(bankId);
        return _.find(transactions, { transactionId });
    }
};