
import React, { useState } from 'react';
import Items from './Components/Items';
import Title from './Components/Title';
import Cart from './Components/Cart'
import LowerCart from './Components/LowerCart';
import AddedAlert from './Components/AddedAlert'
import './App.scss';
import { Alert } from "react-bootstrap";
import ClearModal from './Components/ClearModal';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


export const numberFormatter =
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });




function App() {

  //initialize state with shop items
  const [items, setItems] = useState([
    { id: 1, product_name: 'Borg Cube', price: 200, image: 'https://i.pinimg.com/originals/d1/64/33/d16433a04e9832e04fac43c3f27dddb7.jpg' },
    { id: 2, product_name: 'Millenium Falcon', price: 400, image: 'https://cdn.mos.cms.futurecdn.net/uciG9WygFRtEDcvw9gitTd.jpg' },
    { id: 3, product_name: 'Serenity', price: 600, image: 'https://www.geeksofdoom.com/GoD/img/2013/12/firefly-serenity-e1387241089451-530x326.jpg' },
    { id: 4, product_name: 'Starship Voyager', price: 800, image: 'https://149455152.v2.pressablecdn.com/wp-content/uploads/2016/09/star-trek-voyager.jpg' }
  ])
  //quantity and total should be in cart items, not items database
  //items database shouldn't contain user specific information, which goes inside cartitems state

  //SHOPPING CART
  const [cartItems, setCartItems] = useState([])


  //ALERTS
  const [show, setShow] = useState(false)
  const [danger, setDanger] = useState(false)

  //MODAL
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);



  const addItem = (itemId) => {
    //get the id of the item that was clicked 

    //look for the item in state that matches the id of the item that was clicked
    const itemToSend = items.find(item => item.id === itemId);

    const updatedItem = { ...itemToSend, quantity: 1, total: itemToSend.price }

    const itemAlreadyExists = cartItems.find(item => item.id === itemId);

    if (itemAlreadyExists) {
      setDanger(true)
      setShow(true)
      return;
      //use return to stop the function
    }

    setCartItems(prevItems => [...prevItems, updatedItem])
    setDanger(false)
    setShow(true)



    // itemToSend?.quantity //optional chaining operator 

    //includes doesn't work for objects - only works for primitive data

  }

  const clearShoppingCart = () => {
    setCartItems(cartItems.filter((item) => item.id < 0))
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
          <br />
          {show ? <AddedAlert show={show} setShow={setShow} danger={danger} /> : ''}
          <br />
          {cartItems.length > 0 ? (<Cart cartItems={cartItems} onSum={onSum} onDelete={deleteItem} />) :
            (<Alert variant="primary" className="no-tasks">
              <Alert.Heading >
                There are no tasks to show
              </Alert.Heading>
            </Alert>)
          }

        </div>

        <LowerCart grandTotal={grandTotal} onClear={handleShow} />
        {modalShow ? <ClearModal modalShow={modalShow} handleClose={handleClose} onClear={clearShoppingCart} /> : ''}
      </div>
    </div>
  )
}

// <Cart cartItems={cartItems} />



export default App;
