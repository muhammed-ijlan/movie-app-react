import React from 'react'

import Row from './Row'
import requests from './request'

export default function App() {
  return (
    <div>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  )
}
