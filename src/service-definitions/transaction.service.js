const uuid = require("uuid/v4");

module.exports = {
  Create: (call, callback) => {
    let { bankId, amount, postDate } = call.request;
    return callback(null, {
      bankId,
      amount,
      postDate,
      transactionId: uuid()
    });
  },
  GetAll: (call, callback) => {
    let { bankId } = call.request;
    return callback(null, {
      transactions: []
    });
  },
  Get: (call, callback) => {
    let { transactionId } = call.request;
    return callback(null, {
      bankId: "",
      transactionId,
      amount: 0.0,
      postDate: ""
    });
  }
};
