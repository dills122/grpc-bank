const db = require("../firestore/client.db");

module.exports = {
  Create: (call, callback) => {
    let { firstName, lastName, city } = call.request;
    db.Create({
      firstName,
      lastName,
      city
    }).then((clientId) => {
      return callback(null, {
        clientId: clientId,
        firstName
      });
    }).catch((err) => {
      return callback(err);
    });
  },
  Get: (call, callback) => {
    let { clientId } = call.request;
    db.Get(clientId).then((client) => {
      let record = { clientId, ...client.data() };
      return callback(null, record);
    }).catch((err) => {
      return callback(err);
    });
  },
  Archive: (call, callback) => {
    let { clientId } = call.request;
    db.Archive(clientId);
    return callback(null, { clientId });
  }
};
