
import { useState } from 'react'

function CartItem({ item }) {

    const [state, setState] = useState({ quantity: 1, totalPrice: item.price })
    const quantity = state.quantity
    const totalPrice = state.totalPrice


    const getTotal = (value) => {
        const itemToSum = item
        const price = itemToSum.price
        const quantity = value;
        const total = price * quantity
        setState(prevTotal => {
            return { ...prevTotal, totalPrice: total }
        })

    }

    const incTotal = () => {

        setState(
            prevQuan => {
                return { ...prevQuan, quantity: prevQuan.quantity + 1 }
            }
        )
        //get the total from state (not from the HTML)
        getTotal(quantity + 1)

    }

    const decTotal = () => {

        setState(
            prevQuan => {
                return { ...prevQuan, quantity: prevQuan.quantity - 1 }
            }
        )
        getTotal(quantity - 1)

    }




    return (

        <tr>
            <td >{item.product_name}</td>
            <td >{item.price}</td>
            <td >{quantity}</td>
            <td >{totalPrice}</td>
            <td ><button onClick={incTotal}>+</button></td>
            <td ><button onClick={decTotal}>-</button></td>
        </tr>
    );
}

export default CartItem;