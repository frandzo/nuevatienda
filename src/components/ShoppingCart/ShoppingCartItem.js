import React from "react";
import { NavDropdown } from "react-bootstrap";
import db from "../../app/db/db";
import {Link} from "react-router-dom";

export const ShoppingCartItem = ({item}) => (
  <div>
    <Link to={`/product/${item.productid}`}>
      <li>
        {item.title} - {item.category} - ${item.price} - {item.productid}
      </li> 
    </Link>
    <img onClick={()=>{db.cart.delete(item.id)}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Icons8_flat_delete_generic.svg/723px-Icons8_flat_delete_generic.svg.png"></img>
  </div>
);
