import { createContext, useReducer } from "react";


const CartContext=createContext({
    items:[],
    addItem: (item)=>{},
    removeItem: (id)=>{},
});

function cartReducer(state, action ){
    if(action.type==='ADD_ITEM')
    {
        const existingCartItemIndex=state.item.findIndex((item)=> item.id ===action.item.id)
        const updatedItems=[...state.items];

        if(existingCartItemIndex>-1)
        {
            const updatedItem={...state.items[existingCartItemIndex],
                quantity: state.items[existingCartItemIndex].quantity+1
            }

            updatedItems[existingCartItemIndex]=updatedItem
        }
        else
        {
            updatedItems.push({...action.item, quantity: 1 });
        }

        return {...state, items: updatedItems}
    }

    if(action.type===' REMOVE_ITEM'){
        const existingCartItemIndex=state.item.findIndex((item)=> item.id ===action.item.id)

        const existingCartItem=state.items[existingCartItemIndex];
        const updatedItems=[...state.items];
        if(existingCartItem.quantity===1)
        {
            updatedItems.splice(existingCartItem, 1);
        }
        else
        {
            const updatedItem={...existingCartItem, quantity: existingCartItem.quantity-1};
            updatedItems[existingCartItemIndex]=updatedItem;
        }
        return {...state, items: updatedItems}
    }

    return state;
}

export  function CartContextProvider({children}) {
   const [cart, dispatchCartAction]=useReducer(cartReducer, {items:[] });
   
   const CartContext={
    items: cart.items,
    addItem,
    removeItem
   }

   function addItem(item){
    dispatchCartAction({type: "ADD_ITEM", item})
   }

   function removeItem(id)
   {
    dispatchCartAction({type: "REMOVE_ITEM", id})
   }
   console.log(CartContext)
   return <CartContext.Provider value={CartContext}>
        {children}
    </CartContext.Provider>
}


export default CartContext;