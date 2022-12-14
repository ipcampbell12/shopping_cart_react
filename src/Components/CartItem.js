
import { useState } from 'react'
import { numberFormatter } from '../App';

function CartItem({ item, onSum, onDelete }) {

    const [state, setState] = useState({ quantity: 1, totalPrice: item.price })
    const quantity = state.quantity
    const totalPrice = state.totalPrice


    const getTotal = (value, id) => {

        const itemToSum = item
        const price = itemToSum.price
        const quantity = value;
        const total = price * quantity
        setState(prevTotal => {
            return { ...prevTotal, totalPrice: total }
        })

        //sends it back to state in App.js
        onSum(quantity, total, id)
    }


    const incTotal = (e) => {
        const itemSplit = e.target.id.split('-')
        const itemId = Number(itemSplit[1])

        setState(
            prevQuan => {
                return { ...prevQuan, quantity: prevQuan.quantity + 1 }
            }
        )
        //get the total from state (not from the HTML)
        getTotal(quantity + 1, itemId)

    }

    const decTotal = (e) => {

        const itemSplit = e.target.id.split('-')
        const itemId = Number(itemSplit[1])

        setState(
            prevQuan => {
                return { ...prevQuan, quantity: prevQuan.quantity - 1 }
            }
        )
        getTotal(quantity - 1, itemId)

        if (quantity - 1 === 0) {
            onDelete(itemId)
        }

    }

    return (

        <tr>
            <td >{item.product_name}</td>
            <td >{numberFormatter.format(item.price)}</td>
            <td >{quantity}</td>
            <td >{numberFormatter.format(totalPrice)}</td>
            <td ><button onClick={incTotal} id={`item-${item.id}`} className="increase">+</button></td>
            <td ><button onClick={decTotal} id={`item-${item.id}`} className="decrease">-</button></td>
        </tr>
    );
}

export default CartItem;