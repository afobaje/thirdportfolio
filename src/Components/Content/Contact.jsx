import React from 'react'
import twitter from '../assets/icons8-twitter (1).svg'
import github from '../assets/icons8-github.svg'
import linkedin from '../assets/icons8-linkedin-circled.svg'
import '../Content/css/Contact.css'

const Contact = () => {
  return (
    <div id='contact'>
        <ul>
            <li> <a href="http://www.linkedin.com/in/ikukoyi-david"><img src={linkedin} alt="" /></a> </li>
            <li><a href="http://www.github.com/afobaje"><img src={github} alt="" /></a></li>
            <li><a href="http://www.twitter.com/davidblaqq"><img src={twitter} alt="" /></a></li>
        </ul>
    </div>
  )
}

export default Contact;