
const { database } = require("firebase-admin");
var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ecommerce-d0b6e-default-rtdb.firebaseio.com"
});

module.exports = admin;