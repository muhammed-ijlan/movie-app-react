import React from 'react'
import './App.css'
import Row from './components/row/Row'
import requests from './request';
import Banner from './components/banner/Banner';

export default function App() {
  return (
    <div className='app'>
      <Banner />
      <Row isLargeRow={true} title="Our Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Action Movies" fetchUrl={requests.fetchActionMovies} />
    </div>
  )
}
