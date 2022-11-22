import '../App.scss'
import Item from './Item';

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