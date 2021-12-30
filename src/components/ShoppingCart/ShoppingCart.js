import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { NavDropdown, Nav, Navbar } from 'react-bootstrap'
import db from "../../app/db/db";
import { ShoppingCartItem } from "./ShoppingCartItem";

export const ShoppingCart = () => {

  const [productsCart, setProductsCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);

  const getTotalPrice = () => {
    const total = productsCart?.reduce((totalPrice, currentProduct) => {
      return totalPrice + currentProduct.price
    },0)
    setTotalPrice(total)
  }  

  useLiveQuery(async () => {
    const productsDB = await db.cart.toArray()
    setProductsCart(productsDB)
  },[])

  useEffect(() => {
    if(productsCart.length > 0) {
      getTotalPrice()
    }
  },[productsCart])

  return (
    <>
      <ul>
        {productsCart?.map((product) => {
          return <ShoppingCartItem key={product.id} item={product} />
        })}
        <h4>
          Total: {totalPrice}
        </h4>
      </ul>
    </>
  );
};
