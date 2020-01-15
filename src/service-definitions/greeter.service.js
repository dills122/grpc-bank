module.exports = {
    SayHello: function (call, callback) {
        callback(null, { message: 'Hello ' + call.request.name });
    }
}