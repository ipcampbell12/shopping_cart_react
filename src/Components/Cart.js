import CartItem from './CartItem';
import '../App.scss'

function Cart({ cartItems, onSum, onDelete }) {

    return (
        <div className="cart-items">

            <table className="ships-table" id="ships-table">

                <thead>
                    <tr>
                        <th>Ships</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Cost</th>
                        <th>Add</th>
                        <th>Remove </th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <CartItem
                            item={item}
                            onSum={onSum}
                            key={item.id}
                            onDelete={onDelete}


                        />
                    ))}
                </tbody>
            </table>



        </div>
    );
}

export default Cart;