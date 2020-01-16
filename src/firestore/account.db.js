const dbFactory = require("./db-factory");
const uuid = require("uuid/v4");
const _ = require("lodash");
const collection = "accounts";
const db = dbFactory();

module.exports = {
  Create: async model => {
    let bankId = uuid();
    let { clientId, beginningBalance } = model;
    let obj = { bankId, clientId, balance: beginningBalance };
    await db
      .collection(collection)
      .doc(`${bankId}`)
      .set(obj);
    return obj;
  },
  Get: async bankId => {
    let doc = await db
      .collection(collection)
      .doc(bankId)
      .get();
    return doc.data();
  },
  Archive: bankId => {
    db.collection(collection)
      .doc(`${bankId}`)
      .update({
        archive: true
      });
  },
  UpdateBalance: async (bankId, amount) => {
    let record = (await this.Get(bankId)).data();
    let updatedBalance = _.get(record, "balance", 0) + amount;
    db.collection(collection)
      .doc(`${bankId}`)
      .update({
        balance: updatedBalance
      });
    return { updatedBalance, ...record };
  }
};
