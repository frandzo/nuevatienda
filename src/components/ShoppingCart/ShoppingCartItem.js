import React from "react";
import { NavDropdown } from "react-bootstrap";

export const ShoppingCartItem = ({item}) => (
  <li>{item.title} - {item.category} - ${item.price} </li>
);
