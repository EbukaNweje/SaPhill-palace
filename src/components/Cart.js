import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // addProduct,
  addBooking,
  changeDays,
  removeBooking,
  totalState,
} from "./Global/ProductState";
import { useNavigate } from "react-router-dom";
import "../Css/styleC.css"
import "../Css/mobileC.css"


const Cart = () => {
  const hist = useNavigate();
  const data = useSelector((state) => state.persisitedReducer.bookings);
  const totalCostState = useSelector(
    (state) => state.persisitedReducer.totalRoomCost
  );
  // const days = useSelector((state) => state.persisitedReducer.totalRoomDays);
  const dispatch = useDispatch();

  // const [total, setTotal] = useState(totalCostState);
  // console.log("total", totalCostState);
  console.log(data);

  let Sapping = 1000

  useEffect(() => {
    dispatch(totalState());
  }, [dispatch, data]);
  return (
    <div className="CartContainer">
        <div className="CartWrapper">
        <div className="CartHeader">
          <h2>Shopping Cart</h2>
        </div>

      {
        data.length ? 
        <div className="CartList">
        <article className="CartBody">
          <div className="CartListHead">
            <div className="Prd"><h5>	PRODUCT</h5></div>
            <div className="Prc"><h5>PRICE</h5></div>
            <div className="Qutt"><h5 className="Desk">QUANTITY</h5> <h5 className="MobileQ">QTY</h5></div>
            <div className="Total"><h5>TOTAL</h5></div>
          </div>

          <div className="CartPropsBody">
              {
                data.map((props)=>(
                  <div className="CartPoprs" key={props.id}>
                <div className="Prd MT Pd MB">
                    <div className="ProductImgCart"><img src={props.Image} alt="ProductImage"/></div>
                    <span className="ProductInfo">{props.Name}</span>
                </div>
                <div className="Prc MT"><span className="ProductInfo">&#8358; {props.Price}</span></div>
                <div className="Qutt MT Quut MB">
                  <div className="AddQut"
                  onClick={() => {
                    dispatch(addBooking(props));
                  }}
                  >+</div>
                  <div className="QutShow">{props.QTY}</div>
                  <div className="MutQut"
                  onClick={() => {
                    dispatch(changeDays(props));
                  }}
                  >-</div>
                </div>
                <div className="Total MT">{props.Price * props.QTY}</div>
                <div className="Del MT"
                onClick={() => {
                  dispatch(removeBooking(props))
                }}
                >X</div>
              </div>
                ))
              }
          </div>

          <div className="Subtotal">
              <div className="SubTotals">
                <h3>SubTotals</h3>
                <span className="ProductInfo spanT">&#8358; {totalCostState}</span>
              </div>
              <div className="SubTotals">
                <h3>Shipping to Lagos.</h3>
                <span className="ProductInfo spanT">&#8358; 1000</span>
              </div>

              <div className="SubTotals">
                <h3>Total</h3>
                <span className="ProductInfo spanT">&#8358; {Sapping + totalCostState} </span>
              </div>
          </div>
          <div className="Submit" onClick={() => hist('/paymentForm')}>Proceed to Payment</div>
        </article>
      </div>
 :
 <div className="CartList">
     <article className="CartBody">
      <div className="CartListHead"><p>No Item Added</p></div>
     </article>
 </div>
  }
        </div>
    </div>
  )
}

export default Cart