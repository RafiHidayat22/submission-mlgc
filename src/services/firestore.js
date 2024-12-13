const { Firestore } = require('@google-cloud/firestore');


// Ekspor instance Firestore
const db = new Firestore();
module.exports = db;