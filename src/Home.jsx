import React from 'react'
import { ItemCard } from './ItemCard'
import { data } from './data'


export function Home() {
    return (
        <>
            <h1 className='text-center mt-3'>All products</h1>
            <section className='py-4 container bg-violet-500'>
                <div className='row justify-content-center' style={main}>
                    {
                        data.productName.map((item,id)=> {
                            return <ItemCard
                             img={item.img} 
                             title={item.title} 
                             desc={item.desc} 
                             price={item.price}
                             item={item}
                              key={id}/>
                        })
                    }
                </div>
            </section>
        </>
    )
}

const main = {
    display:"flex",
    justifyContent:"space-around"
}
