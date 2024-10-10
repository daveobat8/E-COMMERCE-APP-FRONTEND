import React from 'react'

function Contact() {
  return (
    <section id='contact'>
        <p className='section__text__p1'>Get In Touch</p>
        <h1 className='title'>Contact Us</h1>
        <div className='contact-info-upper-container'>
            <div className='contact-info-container'>
                <img src="email.png" alt="email icon" className='icon contact-icon'/>
                <p><a href="mailto:examplemail@gmail.com">nunua@gmail.com</a></p>
            </div>
            <div className='contact-info-container'>
                <img src="whatsapp.png" alt="phone icon" className='icon contact-icon'/>
                <p><a>+254734639159</a></p>
            </div>
            <div className='contact-info-container'>
                <img src="phone.png" alt="phone icon" className='icon contact-icon'/>
                <p><a>+254110945414</a></p>
            </div>
        </div>
    </section>
  )
}

export default Contact