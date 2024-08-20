import React, { useState } from 'react'
import "./Faq.css"
import { GoPlusCircle } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";


const Faq = () => {
    const [selected,setSelected] = useState(null)

    const toggle = (i) => {
        if(selected == i){
            return setSelected(null)
        }

        setSelected(i)
    }

    const faqData = [
        { question: "What is Crypto exchange?", answer: "A crypto exchange is a digital trading platform that allows users to buy, sell and trade cryptocurrencies in exchange for fiat money or other digital currencies" },
        { question: "What is Crypto exchange?", answer: "A crypto exchange is a digital trading platform that allows users to buy, sell and trade cryptocurrencies in exchange for fiat money or other digital currencies" },
        { question: "What is Crypto exchange?", answer: "A crypto exchange is a digital trading platform that allows users to buy, sell and trade cryptocurrencies in exchange for fiat money or other digital currencies" },
        { question: "What is Crypto exchange?", answer: "A crypto exchange is a digital trading platform that allows users to buy, sell and trade cryptocurrencies in exchange for fiat money or other digital currencies" },
        { question: "What is Crypto exchange?", answer: "A crypto exchange is a digital trading platform that allows users to buy, sell and trade cryptocurrencies in exchange for fiat money or other digital currencies" },
    ];

    return (
        <>
            <div className="faq">
                <div className="faq-container">
                    <span>YOU MIGHT ASK</span>
                    <h2>FAQ</h2>
                    <p>We tried to provide answers to some commom questions about Cryptly. If you dont find the answer to your question here, please feel free to email us at cryptly@cryptlyfaq.com and we will do our best to help you out </p>
                </div>
                <div className="questions">

                    {faqData.map((item, i) =>
                        <div className="question-container">
                            <div className="question" onClick={() => toggle(i)}>
                                <h5>{item.question}</h5>
                                <button>{selected == i ? <FiMinusCircle/> : <GoPlusCircle/> }</button>
                            </div>
                            <div className={selected == i ? 'answer.active' : 'answer'}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    )}
                </div>


            </div>
        </>
    )
}

export default Faq