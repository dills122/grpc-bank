const dbFactory = require("./db-factory");
const collection = "accounts";
const uuid = require("uuid/v4");
const db = dbFactory();
const _ = require("lodash");

module.exports = {
  Create: async (bankId, amount, postDate) => {
    let transactionId = uuid();
    let obj = {
      transactionId,
      bankId,
      amount,
      postDate
    };
    await db
      .collection(collection)
      .doc(`${bankId}`)
      .set(
        {
          transactions: [obj]
        },
        { merge: true }
      );
    return obj;
  },
  GetAll: async bankId => {
    let record = await db
      .collection(collection)
      .doc(`${bankId}`)
      .get();
    return _.get(record, "transactions", []);
  },
  Get: async (bankId, transactionId) => {
    let transactions = await this.GetAll(bankId);
    return _.find(transactions, { transactionId });
  }
};
