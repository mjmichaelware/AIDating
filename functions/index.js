const admin = require('firebase-admin');
const functions = require('firebase-functions');

if (admin.apps.length === 0) {
 admin.initializeApp();
 }

 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
   if (request.method === 'OPTIONS') {
     response.set('Access-Control-Allow-Methods', 'GET, POST');
       response.set('Access-Control-Allow-Headers', 'Content-Type');
         response.status(204).send('');
           return;
            }
             response.status(200).send('Hello from Firebase Functions!');
             });