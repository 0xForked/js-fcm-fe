import React from 'react'
import axios from 'axios'
import { API_URL } from '../config/const'

export default class UserDetail extends React.Component {
    state = {
      user: []
    }
  
    componentDidMount() {
      const uuid = localStorage.getItem('uuid') ?? null
      
      if (uuid == null) {
        window.location.reload(false)
      }

      axios.get(`${API_URL}/users/${uuid}`)
        .then(res => {
          const user = res.data
          this.setState({ user })
        })
    }
  
    onLoggoutButtonClicked() {
      localStorage.removeItem('uuid')
      window.location.reload(false)
    }

    render() {
      return (
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 focus:border-blue-200 hover:border-blue-200 border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h2 className="title-font font-medium text-1xl text-gray-900">{this.state.user.name}</h2>
            <p className="leading-relaxed">{this.state.user.email}</p>
            <button onClick={() => this.onLoggoutButtonClicked()} className='text-base font-normal text-gray-500 hover:text-blue-600 mt-3 px-2'>
              Log out
            </button>
          </div>
        </div>
      )
    }
  }