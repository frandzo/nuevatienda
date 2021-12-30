import { ShoppingCart } from "./ShoppingCart/ShoppingCart.js";
require('bootstrap');

export function Header(){
    return (
    <div className='nav'>
        <h1>MI TIENDA ONLINE</h1>
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