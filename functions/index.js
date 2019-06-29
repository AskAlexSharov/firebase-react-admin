const functions = require('firebase-functions');

functions.pubsub.schedule('every 5 minutes').onRun((context) => {
  console.log('This will be run every day at 11:05 AM UTC!');
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
