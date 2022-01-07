import firebaseConfig from "../../config/firebase.json"

import { initializeApp } from 'firebase/app'

import { getMessaging, getToken, onMessage } from 'firebase/messaging'

// [START messaging_request_permission]
Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    console.log('Notification permission granted.')
  } else {
    console.log('Unable to get permission to notify.')
  }
})
// [END messaging_request_permission]

const firebaseApp = initializeApp(firebaseConfig)

const messaging = getMessaging(firebaseApp)

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
// [START messaging_get_token]
export const getFCMToken = () => {
  return getToken(messaging).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken)

      if (
        !localStorage.getItem('fcm_token') || 
        (localStorage.getItem('fcm_token') != currentToken)
      ) {
        localStorage.setItem('fcm_token', currentToken)
      }
    } else {
      console.log('No registration token available. Request permission to generate one.')
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err)
    // catch error while creating client token
  })
}
// [END messaging_get_token]


// [START messaging_receive_message]
// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.
export const onNotifyMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload)
    })
})
// [END messaging_receive_message]