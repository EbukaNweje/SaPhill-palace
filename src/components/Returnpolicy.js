import React from 'react'
import '../Css/Returnpolicy.css'
import Firstimg from '../asset/cb-returnss-policy.jpg'
import Secondimg from '../asset/boxcircle.jpg'
import Thirdimg from '../asset/easy-return.jpg'
import Fourthimg from '../asset/truck.jpg'
import Fifthimg from '../asset/bag.jpg'
import Sixthimg from '../asset/money.jpg'

const Returnpolicy = () => {
  return (
    <div class="main">
    <div class="cont">
        <div class="pics"><img class="pic" src={Firstimg} alt=""/></div>
        <div class="para1">
            <section><h3 class="h30">1</h3></section>
           <section class="sec1">Select the number of items you wish to return, the reason of the return and give us more details to help us identify the issue with the product</section>
           <section><h3 class="h31">3</h3></section>
           <section class="sec2">Choose your ideal return process : Return the item yourself to one of our eligible drop-off stations or let us handle it by picking-up the item from you</section>
           <section><h3 class="h32">5</h3></section>
        </div>
        <div class="line">
            <div class="likesss"><img class="like" src={Secondimg} alt=""/></div>
            <div><img class="like" src={Secondimg} alt=""/></div>
            <div><img class="like" src={Secondimg} alt=""/></div>
            <div><img class="like" src={Secondimg} alt=""/></div>
            <div class="likess"><img class="likes" src={Secondimg} alt=""/></div>

        </div>
        <div class="para2">
            <section class="sec2">Login and go to ORDERS Then click on the order of the item(s) you wish to return</section>
            <section><h3 class="two">2</h3></section>
            <section class="sec2">Select your preferred refund method</section>
            <section><h3 class="four">4</h3></section>
            <section class="sec2">Check your information and submit your return request</section>
        </div>
        <footer class="end">
            <div class="box">
                <div class="divpic1" pic><img class="foot" src={Thirdimg} alt=""/></div>
                <header class="desame">ENJOY AN EASY RETURN AND REFUND ONLINE POLICY</header>
                <p class="small">You can return all eligible item(s) within 15 days for Official Store and 7 days for Marketplace. Click here to see Frequently asked Questions.</p>
            </div>
            <div class="box"> 
                <div class="divpic2"><img class="foot" src={Fourthimg} alt=""/></div>
                <header class="desame">PREPARE THE ITEM</header>
                <p class="small">Place the item in its original packaging, including any accessories, tags, labels or freebies. If you have created a password on the device you wish to return, please ensure it is removed, otherwise, your return will be invalid.</p>
            </div>
            <div class="box">
                <div class="divpic3"><img class="foot" src={Fifthimg} alt=""/></div>
                <header class="desame">DROP OFF THE ITEMS OR SCHEDULE A PICK UP</header>
                <p class="small">Return the item at our pickup stations or we can pick up from you within 1 - 4 business days. Always ensure your return slip is signed by our agents as your proof of return.</p>
            </div>
            <div class="box">
                <div class="divpic4"><img class="foot" src={Sixthimg} alt=""/></div>
                <header class="desame">REFUND PROCESSED</header>
                <p class="small">Once we receive your returned item, we will inspect it and process your refund within 3 to 7 days into your preferred refund method.
                    See our timelines here and refund policy for more information</p>
            </div>
        </footer>










    </div>

</div>
  )
}

export default Returnpolicy