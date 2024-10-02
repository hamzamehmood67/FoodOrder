import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "./store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "./store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart(){
   const cartCtx= useContext(CartContext);
    const cartTotal= cartCtx.items.reduce((totalPrice, item)=>totalPrice+item.quantity* item.price,0)
    const userProgressCtx=useContext(UserProgressContext)
  return <Modal className="cart" open={userProgressCtx.progress=== 'cart'}>
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map(item=> <CartItem key={item.id} item={item} onIncrease={()=>{ cartCtx.addItem(item);}} onDecrease={()=>{ return cartCtx.removeItem(item.id)}} />)}
        </ul>

        <p className="cart-total">
            {currencyFormatter.format(cartTotal)}
        </p>

        <p>
            <Button textOnly={true}>Close</Button>
            <Button>Go to checkout</Button>
        </p>
    </Modal>
}