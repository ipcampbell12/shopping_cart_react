
import React, { useState } from 'react';
import Item from './Item';
import Title from './Title';
import Cart from './Cart';
import LowerCart from './LowerCart';
import './App.scss';




function App() {

  //initialize state with shop items
  const [items, setItems] = useState([
    { id: 1, product_name: 'Borg Cube', price: 25000000000000, quantity: 1, image: 'https://i.pinimg.com/originals/d1/64/33/d16433a04e9832e04fac43c3f27dddb7.jpg' },
    { id: 2, product_name: 'Millenium Falcon', price: 13000000, quantity: 1, image: 'https://cdn.mos.cms.futurecdn.net/uciG9WygFRtEDcvw9gitTd.jpg' },
    { id: 3, product_name: 'Serenity', price: 850000, quantity: 1, image: 'https://www.geeksofdoom.com/GoD/img/2013/12/firefly-serenity-e1387241089451-530x326.jpg' },
    { id: 4, product_name: 'Starship Voyager', price: 46000000000, quantity: 1, image: 'https://149455152.v2.pressablecdn.com/wp-content/uploads/2016/09/star-trek-voyager.jpg' }
  ])

  return (
    <div className='app'>
      <div className="container">
        <Title />
        <div className="items-container">
          <table className="items-table">
            <thead>
            </thead>
            <tbody id="items-table">
              {items.map(item => (
                <Item id={item.id} product_name={item.product_name} price={item.price} image={item.image} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="cart">
          <h3>Shopping Cart</h3>
          <Cart />
          <LowerCart />

        </div>

      </div>
    </div>
  )
}




export default App;
