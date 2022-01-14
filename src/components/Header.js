import { ShoppingCart } from "./ShoppingCart/ShoppingCart.js";
import {Link} from "react-router-dom";
require('bootstrap');

export function Header(){
    return (
    <div className='nav'>
        <Link to="/">
          <h1>MI TIENDA ONLINE</h1>
        </Link>
        <div class="menu">
        <input type="checkbox" id="checkbox" />
        <label for="checkbox">
          <img src='https://www.svgrepo.com/show/80543/shopping-cart-outline.svg' width="32px"/>
        </label>
        <ShoppingCart/>
      </div>
    </div>
    )
}