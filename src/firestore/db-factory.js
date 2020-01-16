const admin = require("firebase-admin");
const secureConfig = require("../../grpc-bank-firebase-adminsdk-muoa2-f68a698bdf.json");
module.exports = () => {
    admin.initializeApp({
        credential: admin.credential.cert(secureConfig),
        databaseURL: "https://grpc-bank.firebaseio.com"
    });
    return admin.firestore();
};