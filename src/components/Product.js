
import '../App.css';
import React from "react";
import db from '../app/db/db';
import "../assets/css/styles.css";

export function Product(props){
    let title = props.item.title;
    let img = props.item.image;
    let price = props.item.price;

    const addProductToCart = ({title, price, category}) => {
        db.cart.add({
          title: title,
          price: price,
          category: category
        })
      }

    return (
        <div className="Product">
            <h4>{title}</h4>
            <img src={img}/>
            <div>
                <button onClick={() => addProductToCart(props.item) }>SUMAR AL CARRITO</button>
                <h2>${price}</h2>
            </div>
        </div>
    )
}