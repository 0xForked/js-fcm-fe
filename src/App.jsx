import './App.css'
import UserList from './components/list'
import UserDetail from './components/detail'
import UserNotify from './components/notify'
import FreshChatComponent from './components/freshchat'
import { useState } from 'react'
import { getFCMToken, onNotifyMessageListener } from './service/firebase'
import { Freshchat } from 'reactjs-freshchat';
import 'reactjs-freshchat/dist/index.css'

function App() {
  const [showNotify, setShowNotify] = useState(false)
  const [notification, setNotification] = useState({ title: '', body: '' })

  getFCMToken()

  onNotifyMessageListener().then(payload => {
    if (payload.data.user_id == localStorage.getItem('uuid')) {
     setShowNotify(true)
    }
    
    setNotification({
      title: payload.notification.title, 
      body: payload.notification.body
    })
  }).catch(err => console.log('failed: ', err))

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Welcome to <span className='text-blue-500 font-bold animate-pulse'>Simple App</span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {  (localStorage.getItem('uuid') ?? false)  ? `You are logged in as:` : `Please select user to continue!` }
            </p>
          </div>
          <div className="flex flex-wrap justify-center -m-4 text-center">
            { (localStorage.getItem('uuid') ?? false)  ? <UserDetail /> : <UserList /> }
          </div>
        </div>
      
        { showNotify ? <UserNotify title={ notification.title } body={ notification.body }/> : null }
      </section>

      <FreshChatComponent />

      {/* https://github.com/ViniciusTei/reactjs-freshchat */}
      {/* <Freshchat 
        token={'54dff842-91eb-4ac6-bb88-25ac7a5403f8'} 
        externalId={ localStorage.getItem('uuid') ??  "john.doe1987"} 
        firstName={"John"}
        lastName={"Doe"}
        email={"john@doe.com"}
        phoneCountryCode={"+62"}
        phone={"82275552233"}
        config={{
          headerProperty: {
            backgroundColor: "#16434d",
            foregroundColor: "#ffffff"
          }
        }}
        init={(widget) => {
          widget.user.getUUID().then((resp) => {
            let uuid = resp && resp.data && resp.data.uuid;
            console.log(`user id`, widget)
          });

          widget.user.setProperties({
            accountId: "MO4EDX25PW"
          });
        }}
      /> */}
    </div>
  )
}

export default App
