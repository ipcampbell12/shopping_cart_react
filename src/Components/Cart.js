import CartItem from './CartItem';
import '../App.scss'

function Cart({ cartItems, onSum }) {

    return (
        <div className="cart-items">

            <table className="ships-table" id="ships-table">

                <thead>
                    <tr>
                        <th>Ships</th>
                        <th>Price</th>
                        <th>Ship Total</th>
                        <th>Add</th>
                        <th>Remove </th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <CartItem
                            item={item}
                            onSum={onSum}

                        />
                    ))}
                </tbody>
            </table>



        </div>
    );
}

export default Cart;