import React, { useState } from 'react'
import AddCategories from './AddCategories'
import AddProduct from './AddProduct'
import AddSlider from './AddSlider'
import AllProduct from './AllProduct'
import AllSeller from './AllSeller'
import AllUser from './AllUser'
import OrderedItems from './OrderedItems'
import RefundList from './RefundList'
import SellersProduct from './SellersProduct'
import "./CSS/Dashboard.css"
import "./CSS/DashMobile.css"


const AdminDash = () => {
    const [allProduct, setAllProduct] = useState(true)
    const [addProduct, setAddProduct] = useState(false)
    const [addCartegories, setCartegories] = useState(false)
    const [addSlider, setAddSlider] = useState(false)
    const [allUser, setAllUser] = useState(false)
    const [orderedList, setOrderedList] = useState(false)
    const [refundList, setRefundList] = useState(false)
    const [allSeller, setAllSeller] = useState(false)
    const [sellerProduct, setsellerProduct] = useState(false)

  return (
    <div className='AdminDash'>
        <div className='AdminDashList'>
            <h1> Admin Dashboard </h1>

            <div className='AdminDashList1'>
                <h2> Product</h2>
                <h5 
                    onClick={()=>{
                        setAllProduct(true)
                        setAddProduct(false)
                        setCartegories(false)
                        setAddSlider(false)
                        setAllUser(false)
                        setOrderedList(false)
                        setRefundList(false)
                        setAllSeller(false)
                        setsellerProduct(false)
                    }}
                > All Product </h5>
                <h5
                    onClick={()=>{
                        setAllProduct(false)
                        setAddProduct(true)
                        setCartegories(false)
                        setAddSlider(false)
                        setAllUser(false)
                        setOrderedList(false)
                        setRefundList(false)
                        setAllSeller(false)
                        setsellerProduct(false)
                    }}
                > Add Product </h5>
                <h5
                    onClick={()=>{
                        setAllProduct(false)
                        setAddProduct(false)
                        setCartegories(true)
                        setAddSlider(false)
                        setAllUser(false)
                        setOrderedList(false)
                        setRefundList(false)
                        setAllSeller(false)
                        setsellerProduct(false)
                    }}
                > Add Categories </h5>
                <h5
                    onClick={()=>{
                        setAllProduct(false)
                        setAddProduct(false)
                        setCartegories(false)
                        setAddSlider(true)
                        setAllUser(false)
                        setOrderedList(false)
                        setRefundList(false)
                        setAllSeller(false)
                        setsellerProduct(false)
                    }}
                > Add Slider </h5>
            </div>

            <div className='AdminDashList1'>
                <h2> User </h2>
                <h5
                    onClick={()=>{
                        setAllProduct(false)
                        setAddProduct(false)
                        setCartegories(false)
                        setAddSlider(false)
                        setAllUser(true)
                        setOrderedList(false)
                        setRefundList(false)
                        setAllSeller(false)
                        setsellerProduct(false)
                    }}
                > All User </h5>
            </div>

            <div className='AdminDashList1'>
                <h2> Order </h2>
                <h5
                    onClick={()=>{
                        setAllProduct(false)
                        setAddProduct(false)
                        setCartegories(false)
                        setAddSlider(false)
                        setAllUser(false)
                        setOrderedList(true)
                        setRefundList(false)
                        setAllSeller(false)
                        setsellerProduct(false)
                    }}
                > Ordered Items </h5>
            </div>

            <div className='AdminDashList1'>
                <h2> Refund </h2>
                <h5
                    onClick={()=>{
                        setAllProduct(false)
                        setAddProduct(false)
                        setCartegories(false)
                        setAddSlider(false)
                        setAllUser(false)
                        setOrderedList(false)
                        setRefundList(true)
                        setAllSeller(false)
                        setsellerProduct(false)
                    }}
                > Refund List </h5>
            </div>

            <div className='AdminDashList1'>
                <h2> Seller </h2>
                <h5
                    onClick={()=>{
                        setAllProduct(false)
                        setAddProduct(false)
                        setCartegories(false)
                        setAddSlider(false)
                        setAllUser(false)
                        setOrderedList(false)
                        setRefundList(false)
                        setAllSeller(true)
                        setsellerProduct(false)
                    }}
                > All Sellers </h5>
                <h5
                    onClick={()=>{
                        setAllProduct(false)
                        setAddProduct(false)
                        setCartegories(false)
                        setAddSlider(false)
                        setAllUser(false)
                        setOrderedList(false)
                        setRefundList(false)
                        setAllSeller(false)
                        setsellerProduct(true)
                    }}
                > Seller's Products </h5>
            </div>
        </div>


         <div className='AdminRight'> 
            {
                allProduct ? (
                    <AllProduct />
                ): addProduct ?(
                    <AddProduct />
                ): addCartegories ? (
                    <AddCategories />
                ): addSlider ?(
                    <AddSlider />
                ): allUser ? (
                    <AllUser />
                ): orderedList ? (
                    <OrderedItems />
                ): refundList ? (
                    <RefundList />
                ): allSeller ? (
                    <AllSeller />
                ): sellerProduct ? (
                    <SellersProduct />
                ):null
            }
         </div>





    </div>
  )
}

export default AdminDash