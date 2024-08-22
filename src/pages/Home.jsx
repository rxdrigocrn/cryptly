import React from 'react'
import "./Home.css"
import Table from '../components/Table'
import ChooseUs from '../components/ChooseUs'
import Faq from '../components/Faq'
import JoinUs from '../components/JoinUs'


const Home = ({coins}) => {
    return (
        <>
            <div className="main-container">
               <div className="container">
               <section id='intro'>
                    <h1>
                        A <span className="gradient">New Era</span> Of Crypto<br />
                        <span className="line-two">Exchange</span>
                    </h1>
                    <p>At Cryptly. It's more than just buying/selling digital currencies - it's about being part of something bigger.</p>
                    <div className="email-container">
                    <input type="text" placeholder='Enter your email'/>
                    <button>Get Started</button>
                    </div>
                </section>
                <section id='table-container'>
                  <Table coins={coins} />
                </section>
                <section id='choose-us'>
                    <ChooseUs/>
                </section>
                <section id='faq'>
                    <Faq/>
                </section>
                <section id='newsletter'>
                    <JoinUs/>
                </section>
               </div>
            </div>
        </>
    )
}

export default Home