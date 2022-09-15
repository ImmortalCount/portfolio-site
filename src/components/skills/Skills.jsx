import React from 'react'
import './skills.scss'

export default function Skills() {
  return (
    <div className='skills'>
        <h1 className='header'>Skills</h1>
    <div className='skill_items'>
        <div className='skill_item'><img className='skill_image' src='assets/skills/html5.png' alt=''/><div>HTML</div></div>
        <div className='skill_item'><img className='skill_image' src='assets/skills/css.png' alt=''/><div>CSS</div></div>
        <div className='skill_item'><img className='skill_image' src='assets/skills/javascript.png' alt=''/><div>Javascript</div></div>
        <div className='skill_item'><img className='skill_image' src='assets/skills/sass.png' alt=''/><div>SCSS</div></div>
        <div className='skill_item'><img className='skill_image' src='assets/skills/git.png' alt=''/><div>Git</div></div>
        <div className='skill_item'><img className='skill_image' src='assets/skills/react.png' alt=''/><div>React</div></div>
        <div className='skill_item'><img className='skill_image' src='assets/skills/redux.png' alt=''/><div>Redux</div></div>
        <div className='skill_item'><img className='skill_image' src='assets/skills/node-js.png' alt=''/><div>Node</div></div>
        <div className='skill_item'><img className='skill_image' src='assets/skills/express.png' alt=''/><div>Express</div></div>
        <div className='skill_item'><img className='skill_image' src='assets/skills/python.png' alt=''/><div>Python</div></div>
        <div className='skill_item'><img className='skill_image' src='assets/skills/firebase.png' alt=''/><div>Firebase</div></div>
        <div className='skill_item'><img className='skill_image' src='assets/skills/mongodb.png' alt=''/><div>MongoDB</div></div>
    </div>
    </div>
  )
}
