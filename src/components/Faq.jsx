import React, { useState, useLayoutEffect } from 'react'
import "./Faq.css"
import { GoPlusCircle } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Faq = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    const faqData = [
        { question: "What is Crypto exchange?", answer: "A crypto exchange is a digital trading platform that allows users to buy, sell and trade cryptocurrencies in exchange for fiat money or other digital currencies" },
        { question: "What payment methods are available on Cryptly?", answer: "Cryptly supports a wide range of payment methods, including credit and debit cards, bank transfers, and popular digital wallets. We also accept various cryptocurrencies, allowing for seamless transactions directly from your crypto wallet." },
        { question: "What security measures are in place on Cryptly?", answer: "Cryptly employs advanced security protocols to protect your assets and data. This includes multi-factor authentication (MFA), end-to-end encryption, and cold storage for the majority of funds. Our platform undergoes regular security audits and complies with industry standards to ensure the highest level of protection against potential threats." },
        { question: "How does Cryptly ensure compliance with regulations?", answer: "Cryptly is fully committed to adhering to all relevant legal and regulatory requirements. We work closely with regulatory bodies to ensure compliance with KYC (Know Your Customer) and AML (Anti-Money Laundering) regulations. Our platform is designed to meet the highest standards in the industry, providing transparency and security for all users." },
        { question: "How does Cryptly protect user privacy?", answer: "Cryptly safeguards user privacy with strong encryption and strict data protection practices. We ensure that personal information remains confidential and comply with global privacy regulations." },
    ];


    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
          gsap.to(".faq-container", {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: ".faq-container",
              start: "top 60%",
              end: "bottom 60%",
              scrub:true,
            },
          });
    
          gsap.to(".questions", {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: ".questions",
              start: "top 70%",
              end: "bottom 70%",
              scrub:true,
            },
          });
    
      }, []);
    
      




    return (
        <>
            <div className="faq">
                <div className="faq-container">
                    <span>YOU MIGHT ASK</span>
                    <h2>FAQ</h2>
                    <p>We tried to provide answers to some commom questions about Cryptly. If you dont find the answer to your question here, please feel free to email us at cryptly@cryptlyfaq.com and we will do our best to help you out </p>
                </div>
                <div className="questions">
                    {faqData.map((item, i) => (
                        <div className="question-container" key={i}>
                            <div className="question" onClick={() => toggle(i)}>
                                <h5>{item.question}</h5>
                                <button>{selected === i ? <FiMinusCircle /> : <GoPlusCircle />}</button>
                            </div>
                            <div className={`answer ${selected === i ? 'active' : ''}`}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}

export default Faq