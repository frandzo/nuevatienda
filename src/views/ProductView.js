import React, { useEffect } from 'react';
import {Product} from '../components/Product.js';
import json from "../products.json";
import {useState} from "react";
import db from '../app/db/db.js';
import {useParams} from "react-router-dom";
import { getProductById } from '../app/services/productService.js';
import "../App.css"

export const ProductView =()=>{

    const params = useParams();
    // const [productDetail, setProductDetail] = useState(null);

    // useEffect(()=>{
    //     const {params} = match;
    //     console.log(params);
    //     getProductById(params.id)
    //         .then((productFromDB)=>console.log(productFromDB))
    //         .catch((err)=>console.log(err))
    // },[])
    const prod = json.products.filter((e)=>{return e.id == params.id})
    console.log(prod);
    return (
        <div>
            <h1>
               {prod[0].title}
               ${prod[0].price}
               <br>
               </br>
                <img src={prod[0].image}/>

            </h1>
            <h3>
                {prod[0].description}
            </h3>
        </div>
    )
}