import React from 'react'
import './Contact.css'
import { FaPhone, FaEnvelope,FaMapMarkerAlt,FaGlobe } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='contact-us'>
      <h1 className='contact-heading'>Contact Me</h1>
      <h2>Hope you like my Portfolio</h2>
      <div className='call'>
        <FaPhone size="1.3em"/>
        <p><b>Call me at:</b></p>
        <p>+91 8926090021</p>
      </div>
      <div className='address'>
        <FaMapMarkerAlt size="1.3em" /> 
        <p><b>Working Address:</b></p>
        <p>Bhubaneswar</p>
      </div>
      <div className='email'>
        <FaEnvelope size="1.3em" />
        <p><b>My Email is:</b></p>
        <p>swostikmishra9@gmail.com</p>
      </div>
      <div className='website'>
        <FaGlobe size="1.3em" />
        <p><b>My Website Is:</b></p>
        <p>www.swostikmishra.com</p>
      </div>
      <h3>I will be eager to work with you</h3>
    </div>
  )
}

export default Contact
