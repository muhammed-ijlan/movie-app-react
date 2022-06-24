import React from 'react'
import request from './axios'
import Home from './Home'
import api from './request'

export default function App() {
  return (
    <div>
      <Home api={api.fetchNetflixOriginals} />
    </div>
  )
}
