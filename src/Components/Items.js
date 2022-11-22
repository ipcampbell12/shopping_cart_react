import '../App.scss'
import Item from './Item';

/* const numberFormatter =
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }); */

const Items = ({ items, onAdd }) => {


    return (

        <>
            {items.map((item) => (

                <Item key={item.id} item={item} onAdd={onAdd} />

            ))}
        </>

    );
}

export default Items;