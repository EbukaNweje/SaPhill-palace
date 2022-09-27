import React, { useState } from 'react'
import '../Css/Faq.css'
import Goods from './Goods'
import Saphillbuy from './Saphillbuy'
import Saphillegal from './Saphillegal'
import Saphillsell from './Saphillsell'

const Faq = () => {
    const [sell, setSell] = useState(true)
    const [buy, setBuy] = useState(false)
    const [legal, setLegal] = useState(false)
    const [good, setGood] = useState(false)
    // const Init = (props)=>{
    //     if(props === 'sell' && !sell ) {
    //         setSell(true)
            
    //     } else if (props === 'buy' && !buy) {
    //         setSell(false)
    //         setBuy(true)
            
    //     } else if(props === 'legal' && !legal) {
    //         setSell(false)
    //         setBuy(false)
    //         setLegal(true)
    //     } else if(props === 'good' && !good) {
    //         setSell(false)
    //         setBuy(false)
    //         setLegal(false)
    //         setGood(true)
    //     } else {

    //     }
    // }
  return (
    <div className='Newfaqcontainer'>
        <ul className='Faqlist'>
            <li onClick={()=>{
                setSell(true)
                setBuy(false)
                setLegal(false)
                setGood(false)
            }}>How can I sell on Saphill Palace?</li>
            <li onClick={()=>{
                setSell(false)
                setBuy(true)
                setLegal(false)
                setGood(false)
            }}>How can I buy something on Saphill Palace?</li>
            <li onClick={()=>{
                setSell(false)
                setBuy(false)
                setLegal(true)
                setGood(false)
            }}>How to report illegal activity on Saphill Palace? </li>
            <li onClick={()=>{
                setSell(false)
                setBuy(false)
                setLegal(false)
                setGood(true)
            }}>Prohibited Products on SaPhill Palace?</li>
        </ul>
        <section className='Newfaqcontent'> 
        {
            sell ?(<Saphillsell/>)
            : buy?(<Saphillbuy/>)
            :legal?(<Saphillegal/>)
            :good?(<Goods/>)
            : null
        }
          
        </section>
    </div>
  )
}

export default Faq