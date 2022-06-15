import React from 'react'
import '../Content/css/About.css'

const About = () => {
  return (
    <article className='about' id='about'>
       <div>
       I am a seasoned professional with up to a year of working on web development tools. I have practised on different APIs and I have learnt different concepts. I know the best tool for what. We know our onions.
       </div>
       <div className='faq'>
          <h2> FAQ?</h2>
          <ul>
            <li>
              <h3>Why should I pick you over others especially considering people with better advantages?</h3>
              <p>-I am always willing to learn and even start from the basics if I have to. With my knowledge of fundamentals, I can quickly pick up any required tool not initially familiar.</p>
            </li>
            <li>
              <h3>What is your core advantage?</h3>
              <p>-I have the ability and humility to work with people. I am a team player</p>
            </li>
            <li>
              <h3>What is your tech stack?</h3>
              <p>-I am a MERN developer which includes MongoDB, ExpressJS, ReactJS and NODE.</p>
            </li>
            <li>
              <h3>Can you start work immediately?</h3>
              <p>-Yes, I can</p>
            </li>
          </ul>
       </div>
    </article>
  )
}

export default About