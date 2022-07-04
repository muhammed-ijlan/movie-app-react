import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from './Row'
import requests from './request'

export default function App() {
  return (
    <div>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  )
}
