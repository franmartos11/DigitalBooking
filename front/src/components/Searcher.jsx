import React from 'react'
import Button from './Button'
import "../styles/searcher.css"

function Searcher() {
  return (
    <div className='main_container'>
      <h1>Busca ofertas en hoteles, casa y mucho mas</h1>
      <div className='container' >
        <input></input>
        <input></input>
        <Button></Button>
      </div>

    </div>
  )
}

export default Searcher