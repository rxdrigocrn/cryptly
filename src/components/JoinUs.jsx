import React from 'react'
import "./JoinUs.css"
const JoinUs = () => {
  return (
    <>
      <div className="joinUs-container">
        <div className="newsletter-control">
          <span>JUST SUBSCRIBE</span>
          <h2>Newsletter</h2>
          <p>Subscribe to our newsletter for to know big updates before everyone else. And yeah you can unsubscribe anytime!</p>
        </div>
        <div className="email-container">
          <input type="text" placeholder='Enter your email' />
          <button>Get Started</button>
        </div>
      </div>
    </>
  )
}

export default JoinUs