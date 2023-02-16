import React from 'react'
import Button from './Button'
import '../styles/header.css'

function Header() {
  return (
    <header>Header
      <div className='buttons'>
      <Button></Button>
      <Button></Button>
      </div>
    </header>
  )
}

export default Header