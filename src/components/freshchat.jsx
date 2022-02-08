import React from 'react'
import axios from 'axios'
import { API_URL } from '../config/const'

export default class FreshChatComponent extends React.Component {
  state = { conversations: [], msg: []}

  componentDidMount() {
    axios.get(`${API_URL}/freshchat/conversations`)
        .then(res => {
          const conversations = res.data
          this.setState({ conversations })
        })
  }

  onConversationPressed(conversation) {
    axios.get(`${API_URL}/freshchat/conversations/${conversation.detail.conversation_id}`)
        .then(res => {
          const messages = res.data

          this.setState({ msg: messages })
        })
  }


  onSendMessage = (event) => {
    event.preventDefault()
    let reply = event.target[0].value
    let id = 'd1dfb580-ef33-4b90-9d0f-6a8ee14c1bfc'

    axios.get(`${API_URL}/freshchat/conversations/${id}/${reply}`)
    .then(res => {
      console.log(res)
    })
  }


  render() {
    return (
      <section id='freshdesk' className='flex justify-between p-8'>
        <div className='bg-gray-500 p-8 text-white w-56'>
          { this.conversationList() }
        </div>

        <div className='bg-gray-200 p-8 text-black w-11/12'>
          <div className="relative mt-8 flex justify-between">
           <form onSubmit={this.onSendMessage}>
            <input  name="fromAgent" type="text" className='w-full p-2'/>
            <button className='p-2 border-2 border-cyan-300 bg-cyan-800 text-white' type='submit'>Send</button>
            </form>
          </div>

          { this.messagesList() }
          
        </div>
      </section>
    )
  }
  
  messagesList() {
    return (
      this.state.msg
        .map(message => 
          <div key={message.id} className="flex flex-col border-2 p-3 hover:bg-white hover:text-black">
            { message.actor_type } send message <br />
            { message.message_parts[0].text.content }
          </div>
        )
    )
  }

  conversationList() {
    return (
      this.state.conversations
        .map(conversation => 
          <a key={conversation.id} onClick={() => { this.onConversationPressed(conversation) }}>
          <div className="flex flex-col border-2 p-3 hover:bg-white hover:text-black">
            <h5>{ conversation.detail.conversation_id }</h5>
            <p>{ conversation.detail.status }</p>
          </div>
          </a>
        )
    )
  }
}