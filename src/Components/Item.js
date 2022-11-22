import '../App.scss'
import { numberFormatter } from '../App';

function Item({ item, onAdd }) {

    const onClick = (e) => {
        const itemSplit = e.target.id.split('-')
        const itemId = Number(itemSplit[1])

        //sends click event to App.js
        onAdd(itemId)
    }

    return (
        <tr>
            <td >{item.product_name}</td>
            <td >{numberFormatter.format(item.price)}</td>
            <td><img src={`${item.image}`} alt={`${item.product_name}`} className='images' /></td>
            <td><button onClick={onClick} id={`item-${item.id}`}>Add To Cart</button></td>
        </tr>
    );
}

export default Item;

// {(e) => setNamne(e.target.value)}


