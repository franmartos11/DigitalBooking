import React from 'react'
import Button from './Button'
import "../styles/searcher.css"

function Searcher() {
  return (
    <div className='main_container'>
      <h1>Busca ofertas en hoteles, casa y mucho mas</h1>
      <div className='container' >
        <form>
          <select>
            <option value="" disabled selected>A donde vamos?</option>
              <hr />
              <option>
                <h1>San Carlos de Bariloche</h1> 
                <p>Argentina</p>
              </option>
          </select>
          <input></input>
        </form>
        <Button></Button>
      </div>

    </div>
  )
}

export default Searcher