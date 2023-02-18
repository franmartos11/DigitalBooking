import React from 'react'
import "../styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
      <p> ©2023 Digital Booking</p>
      <div className='footerIcons'>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faLinkedinIn} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </footer>
  )
}

export default Footer