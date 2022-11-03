import React from 'react'
import { Stack } from './Stack'
import { languages, technology, text } from '../data'
import './styles.css'

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <div className="about__circle__left"></div>
        <div className="about__about">
          <div className="about__text">
          <span className='text__'>About Me</span>
          <p className='text__me'>A bit about me.</p>
          <p className='brief_intro'>{text}</p>
          Helloooo
          

          </div>
          <div className="stacks__">
          <Stack stacks={languages} name="Languages" />
           <Stack stacks={technology} name="Technology" />

          </div>
          
        </div>
        <div className="about__circle__right"></div>
      </div>
    </div>
  )
}

export default About