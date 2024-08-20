import React from 'react'
import wallet from "../assets/wallet.png"
import banks from "../assets/banks.png"
import okay from "../assets/okay.png"
import "./ChooseUs.css"

const ChooseUs = () => {
  return (
    <>
      <div className="chooseUs">
        <span>WE ARE AT YOUR SERVICE</span>
        <h2>A safe space for crypto nerds</h2>
      <div className="card">
        <div className="card-container">
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
        <div className="card-container">
          <div className="card-image">
            <img src={banks} alt="" />
          </div>
          <div className="card-text">
            <h4>Security and Privacy</h4>
            <p>Securely storing and managing funds is one of the most important elements of Cryptly.
            </p>
          </div>
        </div>
        <div className="card-container">
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