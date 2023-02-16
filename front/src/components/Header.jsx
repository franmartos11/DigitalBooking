import React from 'react'
import Button from './Button'
import logoDesktop from "../images/logo/logo_home_desktop.png"
import logoMobile from "../images/logo/logo_home_tablet.png"
import "../styles/header.css"

function Header() {
  return (
    <header>
      <img className='logoDesktop' src={logoDesktop} alt="a logo with two white upper and lower ds in a blue background and text that saids sentite como en tu hogar" />
      <img className='logoMobile' src={logoMobile} alt="a logo with two white upper and lower ds in a blue background " />
      <div className='buttons'>
      <Button text={"Crear Cuenta"} nameClass={"header"} />
      <Button text={"Iniciar Sesion"} nameClass={"header"} />
      </div>
      <span class="material-symbols-outlined">menu</span>
    </header>
  )
}

export default Header