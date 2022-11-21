import '../App.scss'

function Item({ item }) {
    return (
        <tr id={`item-${item.id}`}>
            <td>{item.product_name}</td>
            <td>{item.price}</td>
            <td><img src={`${item.image}`} alt={`${item.product_name}`} className='images' /></td>
        </tr>
    );
}

export default Item;




