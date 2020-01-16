const uuid = require("uuid/v4");
module.exports = {
  Create: (call, callback) => {
    let { clientId, beginningBalance } = call.request;
    //Add firebase logic
    return callback(null, {
      clientId,
      bankId: uuid(),
      balance: beginningBalance
    });
  },
  UpdateBalance: (call, callback) => {
    let { clientId, bankId, amount } = call.request;
    //Need to get current balance
    let newBalance = 5 + amount;
    //Add firebase logic
    return callback(null, {
        clientId,
        bankId,
        balance: newBalance,
        transactions: [] //Need to get whole account record
    });
  },
  Archive: (call, callback) => {
      let { clientId, bankId} = call.request;
      //Add logic for firebase
      return callback();
  }
};
