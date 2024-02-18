import React, { useState } from 'react';
import { useCart } from 'react-use-cart';

export const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart()
  if (isEmpty) return <h1>Nothing in the basket</h1>
  
  return (
    <section className='py-4 container bg-stone-200'>
      <h5>({totalUniqueItems}) ({totalItems})</h5>
      <table className='table table-ligth table-hover m-0'>
        {
          items.map((item, id) => {
            return (
              <tr key={id}>
                <td>
                  <img src={item.img} style={{height:'6rem'}}></img>
                </td>
                <td>
                  {item.title}
                </td>
                <td>
                  {item.price}
                </td>
                <td>({item.quantity})</td>
                <td>
                  <button onClick={()=> updateItemQuantity(item.id,item.quantity+1)} btn btn-info ms-2>+</button>
                  <button onClick={()=> updateItemQuantity(item.id,item.quantity-1)} btn btn-info ms-2>-</button>
                  <button onClick={()=> removeItem(item.id)} className = "btn btn-info danger ms-2" > remove</button>
                </td>
              </tr >
            )
          })
        }
       </table >
       <div>
        <h2>total: ${cartTotal}</h2>
       </div>
       <div>
         <button onClick={()=> emptyCart()}>clean</button>
       </div>
    </section >
  )
}


