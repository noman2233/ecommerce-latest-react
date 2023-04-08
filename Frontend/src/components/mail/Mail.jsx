import React from 'react'
import './mail.css'
const Mail = () => {
  return (
    <div className="MailContainer">
        <h2 className="neslwtter">Subscribe to out NewsLetter</h2>
        <h3 className='subscription'>Subscribe for special discount </h3>
        <div className="inputemail">

        <input type="email" name="email" id="email" />
        <button className='botn'>Subscribe</button>
        </div>
    </div>
  )
}

export default Mail