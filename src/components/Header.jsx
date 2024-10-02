import logoIm from "../assets/logo.jpg"
import Button from "./UI/Button"
import { useContext } from "react";
import CartContext from "./store/CartContext";
import UserProgressContext from "./store/UserProgressContext";
export default function Header(){
    const cartCtx= useContext(CartContext);
    const userProgressCtx=useContext(UserProgressContext);
    const cartTotal= cartCtx.items.reduce((totalPrice, item)=>totalPrice+item.quantity* item.price,0)
    
    function handleShowCart(){
        userProgressCtx.showCart();
    }
    
    return <header id="main-header">
        <div id="title">
            <img src={logoIm} />
            <h1>React Food</h1>
        </div>

        <nav>
            <Button onClick={handleShowCart} textOnly={true}>Cart ({cartTotal})</Button>
        </nav>
    </header>
}