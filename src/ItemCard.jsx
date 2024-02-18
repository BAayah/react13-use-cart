import React from 'react';
import { useCart } from 'react-use-cart';

export const ItemCard = (props) => {
    const {addItem} = useCart()

    return (
        <div >
            <div className="card" style={styles}>
                <img src={props.img} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>                       
                        <h5>$ {props.price}</h5>
                        <h5 className="card-text">{props.desc}</h5>                       
                        <button className='btn-btn-success' 
                        onClick={()=> addItem(props.item)}>Add to Card</button>
                    </div>
            </div>
        </div>
    )
}

const styles = {
    width:'200px',
}

