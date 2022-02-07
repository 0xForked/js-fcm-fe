import React from 'react'
// import Freshchat from '@freshworks-jaya/freshchat-api';

// const freshchat = new Freshchat('https://api.freshchat.com/v2', 'eyJraWQiOiJjdXN0b20tb2F1dGgta2V5aWQiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmcmVzaGNoYXQiLCJzdWIiOiI2MDkyODZmOC02ZGRjLTQ1YzMtYTcwOS1jYmFlZDUxNzc0NzAiLCJjbGllbnRJZCI6ImZjLTBiOGIyOTg0LTE3MjEtNDdiOS05MmY4LWUzY2I4NGI4ZmM1OCIsInNjb3BlIjoiYWdlbnQ6cmVhZCBhZ2VudDpjcmVhdGUgYWdlbnQ6dXBkYXRlIGFnZW50OmRlbGV0ZSBjb252ZXJzYXRpb246Y3JlYXRlIGNvbnZlcnNhdGlvbjpyZWFkIGNvbnZlcnNhdGlvbjp1cGRhdGUgbWVzc2FnZTpjcmVhdGUgbWVzc2FnZTpnZXQgYmlsbGluZzp1cGRhdGUgcmVwb3J0czpmZXRjaCByZXBvcnRzOmV4dHJhY3QgcmVwb3J0czpyZWFkIHJlcG9ydHM6ZXh0cmFjdDpyZWFkIGRhc2hib2FyZDpyZWFkIHVzZXI6cmVhZCB1c2VyOmNyZWF0ZSB1c2VyOnVwZGF0ZSB1c2VyOmRlbGV0ZSBvdXRib3VuZG1lc3NhZ2U6c2VuZCBvdXRib3VuZG1lc3NhZ2U6Z2V0IG1lc3NhZ2luZy1jaGFubmVsczptZXNzYWdlOnNlbmQgbWVzc2FnaW5nLWNoYW5uZWxzOm1lc3NhZ2U6Z2V0IG1lc3NhZ2luZy1jaGFubmVsczp0ZW1wbGF0ZTpjcmVhdGUgbWVzc2FnaW5nLWNoYW5uZWxzOnRlbXBsYXRlOmdldCBmaWx0ZXJpbmJveDpyZWFkIGZpbHRlcmluYm94OmNvdW50OnJlYWQgcm9sZTpyZWFkIGltYWdlOnVwbG9hZCIsImlzcyI6ImZyZXNoY2hhdCIsInR5cCI6IkJlYXJlciIsImV4cCI6MTk1OTc3Mjg2NCwiaWF0IjoxNjQ0MjQwMDY0LCJqdGkiOiI5NTUxMWE5Ni1lMzcyLTQ5YjgtOWM5Ny0yNGQwNGE0YzhlOTUifQ.cGMBJIF9hBg79gdbQhWX3WRips2soHtpR9sQEoch47M');

export default class FreshChatComponent extends React.Component {
  state = { user: [], conversation: [] }

  componentDidMount() {
    // var appUrl = 'https://nhtestaas.freshchat.com';
    // var appAlias = '1189b29c-d543-4b3d-98e2-32608d4b7a2d'; //Available from Settings--> Mobile SDKs
    // var conversationId = '<Freshchat Conversation UUID>';

    // const uuid = localStorage.getItem('uuid') ?? null
    
    // if (uuid == null) {
    //   window.location.reload(false)
    // }
    
    // axios.get(`${API_URL}/users/${uuid}`)
    //   .then(res => {
    //     const user = res.data
    //     this.setState({ user })
    //   })

    // freshchat.getConversationTranscript(
    //   appUrl, 
    //   appAlias, 
    //   conversationId, 
    //   {
    //     //The below value can either be 'text' or 'html'
    //     output: 'html', 
    //     //Below is a Flag to include the conversation link in the generated transcript.
    //     isIncludeFreshchatLink: true, 
    //     //Below is a Flag to generate transcript for the entire conversation or every interaction. (Create -> Latest message, Reopen -> Latest message)
    //     isFetchUntilLastResolve: true,
    //     //Choose a timezone offset for timestamps in conversation
    //     timezoneOffset: 330, // for Asia/Kolkata timezone
    //     //Limit the number of messages fetched in the transcript
    //     messagesLimit: 200
    //   }, 
    //   {
    //     //Exclude normal messages
    //     isExcludeNormal: false,
    //     //Exclude private messages
    //     isExcludePrivate: false,
    //     //Exclude system messages
    //     isExcludeSystem: true
    //   })
    //   .then(function (resp) {
    //     console.log(resp);
    //   }, function (error) {
    //     console.log(error);
    //   });
  }

  onSignOut() {
    // const uuid = localStorage.getItem('uuid') ?? null

    // if (uuid != null) {
    //   axios.put(
    //     `${API_URL}/users/${uuid}`, 
    //     { fcm_token: null },
    //     { headers: { 'Content-Type': 'application/json' } }
    //   )
    // }

    // localStorage.removeItem('uuid')

    // window.location.reload(false)
  }

  render() {
    return (
      <section id='freshdesk' className='flex justify-between p-8'>
        {/* <div className='bg-gray-500 p-8 text-white w-11/12'>
          <div className="flex flex-col border-2 p-3 hover:bg-white hover:text-black">
            <h5>Name</h5>
            <p>Latest Message</p>
          </div>
        </div>

        <div className='bg-gray-200 p-8 text-black'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo illum beatae delectus doloremque, deserunt, tempore similique autem est illo sed vel eum, numquam neque quisquam repellendus maxime rerum. Necessitatibus!
          <div className="relative mt-8 flex justify-between">
            <input type="text" className='w-full p-2'/>
            <button className='p-2 border-2 border-cyan-300 bg-cyan-800 text-white'>Send</button>
          </div>
        </div> */}
      </section>
    )
  }
}