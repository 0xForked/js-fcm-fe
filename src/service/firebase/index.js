import firebaseConfig from "../../config/firebase.json"

import { initializeApp } from 'firebase/app'

import { getMessaging, getToken, onMessage } from 'firebase/messaging'
import { onBackgroundMessage } from "firebase/messaging/sw"

const firebaseApp = initializeApp(firebaseConfig)

const messaging = getMessaging(firebaseApp)

getToken(messaging).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken)

    if (!localStorage.getItem('fcm_token') || localStorage.getItem('fcm_token') != currentToken) {
      localStorage.setItem('fcm_token', currentToken)
    }
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.')
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err)
})

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload)
})


// onBackgroundMessage(messaging, (payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// })