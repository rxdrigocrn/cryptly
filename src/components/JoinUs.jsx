import React from 'react'
import "./JoinUs.css"
import gsap from 'gsap'
import { useLayoutEffect } from 'react'
const JoinUs = () => {

  useLayoutEffect(() => {
    gsap.to(".joinUs-container", {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".joinUs-container",
        start: "top 10%",
        end: "bottom -10%",
      },
    });


},[])

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