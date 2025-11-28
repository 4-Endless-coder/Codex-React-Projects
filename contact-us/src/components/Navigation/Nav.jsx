import React from 'react'

const Nav = () => {
  return (
     <div>
        <nav>
          <div className="logo" style={{width:'20px'}}>
            <img src="\assets\logo.svg" alt="logo" />
          </div>
          <ul>
            <li href="#">Home</li>
            <li href='#'>About</li>
            <li href="#">Contact</li>
          </ul>
        </nav>
      </div>
  )
}

export default Nav
