import React from "react";
import { NavDropdown } from "react-bootstrap";
import db from "../../app/db/db";

export const ShoppingCartItem = ({item}) => (
  <li onClick={()=>{db.cart.delete(item.id)}}>
    {item.title} - {item.category} - ${item.price} 
  </li>
);
