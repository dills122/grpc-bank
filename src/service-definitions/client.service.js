module.exports = {
  Create: (call, callback) => {
    let { firstName, lastName, city } = call.request;
    //Add firebase logic
    return callback(null, {
      clientId: 1,
      firstName: "Example"
    });
  },
  Get: (call, callback) => {
    let { clientId } = call.request;
    //Add firebase logic
    return callback(null, {
      clientId,
      firstName: "Example",
      lastName: "Example",
      city: "Example"
    });
  },
  Archive: (call, callback) => {
    let { clientId } = call.request;
    //Add firebase logic
    return callback(null, {
      clientId
    });
  }
};
