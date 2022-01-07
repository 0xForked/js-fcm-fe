import React from 'react'
import axios from 'axios'
import { API_URL } from '../config/const'

export default class UserList extends React.Component {
    state = {
      users: []
    }
  
    componentDidMount() {
      axios.get(`${API_URL}/users`)
        .then(res => {
          const users = res.data
          this.setState({ users })
        })
    }

    onSignIn(user) {
      localStorage.setItem('uuid', user.id)
      const fcmToken = localStorage.getItem('fcm_token') ?? null 

      if (fcmToken != null) {
        axios.put(
          `${API_URL}/users/${user.id}`, 
          { fcm_token: fcmToken },
          { headers: { 'Content-Type': 'application/json' } }
        )
      }
  
      window.location.reload(false)
    }
  
    render() {
      return (
        this.state.users
              .map(user =>
                <div key={user.id} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <a onClick={() => { this.onSignIn(user) }}>
                    <div className="border-2 focus:border-blue-200 hover:border-blue-200 border-gray-200 px-4 py-6 rounded-lg">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <h2 className="title-font font-medium text-1xl text-gray-900">{user.name}</h2>
                      <p className="leading-relaxed">{user.email}</p>
                    </div>
                  </a>
                </div>
              )
      )
    }
  }