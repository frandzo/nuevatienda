import React from 'react';
import json from "../products.json";
import {Product} from '../components/Product.js';

export default function Home() {
    
    let productos=json.products.map((obj)=>{return <Product item={obj}></Product>})

    return(
        <>
            <div className="List">
                {productos};
            </div>
        </>)
}