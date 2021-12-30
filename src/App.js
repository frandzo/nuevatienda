import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header.js';
import {Product} from './components/Product.js';
import json from "./products.json";

function App() {
  // json.products[1].title

  let productos=json.products.map((obj)=>{return <Product item={obj}></Product>})

  return (
    <div className="App">
        <Header></Header>
        {/* <Product item={json.products[1]}></Product> */}
        <div className="List">
          {productos};
        </div>
    </div>
  );
}

export default App;
