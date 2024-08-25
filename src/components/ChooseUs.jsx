import React from 'react'
import wallet from "../assets/wallet.png"
import banks from "../assets/banks.png"
import okay from "../assets/okay.png"
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./ChooseUs.css"
import { useLocation } from 'react-router-dom';

import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'

const ChooseUs = () => {
  const location = useLocation();


  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".chooseUs",
        start: "top 65%",
        end: "bottom 65%",
        scrub:true,
      },
      defaults: { duration: 0.8 }
    });

    tl.to(".card1", { x: 0, opacity: 1 })
      .to(".card2", { y: 0, opacity: 1 }, "-=0.3")
      .to(".card3", { x: 0, opacity: 1 }, "-=0.3");

  }, [location]);

  return (
    <>
      <div className="chooseUs">
        <span>WE ARE AT YOUR SERVICE</span>
        <h2>A safe space for crypto nerds</h2>
        <div className="card">
          <div className="card-container card1">
            <div className="card-image">
              <img src={wallet} alt="" />
            </div>
            <div className="card-text">
              <h4>Investing in Crypto</h4>
              <p>
                Cryptly makes investing in cryptocurrencies secure and simple, helping you grow your portfolio with confidence.
              </p>
            </div>
          </div>
          <div className="card-container card2">
            <div className="card-image">
              <img src={banks} alt="" />
            </div>
            <div className="card-text">
              <h4>Security and Privacy</h4>
              <p>Securely storing and managing funds is one of the most important elements of Cryptly.
              </p>
            </div>
          </div>
          <div className="card-container card3">
            <div className="card-image">
              <img src={okay} alt="" />
            </div>
            <div className="card-text">
              <h4>Round the clock Customer Support</h4>
              <p>You can seek answers to your questions by contacting Cryptly customer support 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChooseUs