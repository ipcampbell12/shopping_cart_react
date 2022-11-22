
import React, { useState } from 'react';
import Items from './Components/Items';
import Title from './Components/Title';
import Cart from './Components/Cart'
import LowerCart from './Components/LowerCart';
import './App.scss';

export const numberFormatter =
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });




function App() {

  //initialize state with shop items
  const [items, setItems] = useState([
    { id: 1, product_name: 'Borg Cube', price: 200, quantity: 1, total: 200, image: 'https://i.pinimg.com/originals/d1/64/33/d16433a04e9832e04fac43c3f27dddb7.jpg' },
    { id: 2, product_name: 'Millenium Falcon', price: 400, quantity: 1, total: 400, image: 'https://cdn.mos.cms.futurecdn.net/uciG9WygFRtEDcvw9gitTd.jpg' },
    { id: 3, product_name: 'Serenity', price: 600, quantity: 1, total: 600, image: 'https://www.geeksofdoom.com/GoD/img/2013/12/firefly-serenity-e1387241089451-530x326.jpg' },
    { id: 4, product_name: 'Starship Voyager', price: 800, quantity: 1, total: 800, image: 'https://149455152.v2.pressablecdn.com/wp-content/uploads/2016/09/star-trek-voyager.jpg' }
  ])

  //Initilaize state for cart items
  const [cartItems, setCartItems] = useState([])


  const addItem = (item) => {
    //get the id of the item that was clicked 
    const itemId = item

    //look for the item in state that matches the id of the item that was clicked
    const itemToSend = items.find(item => item.id === itemId)

    //console.log(itemToSend)

    //send the item to the shopping cart

    //ADDS the item to cartItems
    if (!cartItems.includes(itemToSend)) {
      setCartItems(prevItems => [...prevItems, itemToSend])
    } else {
      alert("You can only add the item once. Use plus and minus buttons to change the quantity")
    }

  }

  const deleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
    //console.log(itemToDelete)
  }

  //find total of all items in shopping cart state
  const grandTotal = cartItems.reduce((accumulator, val) => {
    return accumulator + val.total
  }, 0)

  const onSum = (quantity, total, id) => {
    const itemtoUpdate = cartItems.find(item => item.id === id)
    const updatedItem = { ...itemtoUpdate, quantity: quantity, total: total }

    //return a copy of cartItems that replaces the previous item with the updated item
    //UPDATES the item already IN cartItems
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        item = updatedItem
      } return item
    }))

  }

  console.log(cartItems)



  return (
    <div className='app'>
      <div className="container">
        <Title />
        <div className="items-container">
          <table className="items-table">
            <thead>
            </thead>
            <tbody id="items-table">
              <Items items={items} onAdd={addItem} />
            </tbody>
          </table>
        </div>
        <div className="cart">
          <h3>Shopping Cart</h3>
          <Cart cartItems={cartItems} onSum={onSum} onDelete={deleteItem} />

          <LowerCart grandTotal={grandTotal} />


        </div>

      </div>
    </div>
  )
}

// <Cart cartItems={cartItems} />



export default App;
