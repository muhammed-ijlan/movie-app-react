import React from 'react'
import './App.css'
import Row from './Row'
import requests from './request'

export default function App() {
  return (
    <div className='app'>
      <Row isLargeRow={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Action Movies" fetchUrl={requests.fetchActionMovies} />
    </div>
  )
}
