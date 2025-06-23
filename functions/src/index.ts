    // src/index.ts
    // This file defines your Firebase Cloud Functions in TypeScript.

    import {onRequest} from "firebase-functions/https"; // Import onRequest to handle HTTP requests
    import * as logger from "firebase-functions/logger"; // Import logger for logging

    // Define an HTTP-triggered function named 'helloWorld'
    // This function will respond to HTTP GET requests.
    export const helloWorld = onRequest((request, response) => {
      // Use the logger to log messages to Cloud Logging
      logger.info("Hello logs from helloWorld function!", {structuredData: true});

      // Send a response back to the client
      response.send("Hello from Firebase Functions (TypeScript)! Your app is connected.");
    });

    // You can add more functions here, for example:
    /*
    import {onDocumentCreated} from "firebase-functions/firestore";

    export const addUserToFirestore = onDocumentCreated("users/{userId}", (event) => {
      logger.info("New user created in Firestore!", {userId: event.params.userId});
      // Perform actions when a new user document is created
      // e.g., send a welcome email, update a counter, etc.
      return null; // Return null for background functions
    });
    */