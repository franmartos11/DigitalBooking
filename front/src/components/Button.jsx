import React from 'react'
import "../styles/button.css"

function Button({text, nameClass}) {
  return (
    <button className={nameClass}>
        {text}
    </button>
  )
}

export default Button