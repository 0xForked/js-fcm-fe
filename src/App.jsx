import './App.css'
import UserList from './components/list'
import UserDetail from './components/detail'

// import { useState } from 'react'

function App() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-6">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Welcome to <span className='text-blue-500 font-bold animate-pulse'>Simple App</span>
          </h1>
          <ValidTitle />
        </div>
        <div className="flex flex-wrap justify-center -m-4 text-center">
            <ValidUI />
        </div>
      </div>
    </section>
  )
}

function ValidTitle() {
  if (localStorage.getItem('uuid') ?? false) {
    return ( 
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        You are logged in as:
      </p>
    )
  }

  return ( 
    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Please select user to continue!
    </p>
  )
}

function ValidUI() {
  if (localStorage.getItem('uuid') ?? false) {
    return (<UserDetail />)
  }

  return (<UserList />)
}

export default App
