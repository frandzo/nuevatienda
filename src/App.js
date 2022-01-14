import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header.js';
import {Product} from './components/Product.js';
import json from "./products.json";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./views/Home.js";
import {ProductView} from "./views/ProductView.js";

function App() {
  // json.products[1].title

  let productos=json.products.map((obj)=>{return <Product item={obj}></Product>})

  return (
    <div className="App">
        <Header></Header>
        <Switch>
          <Route path={"/"} exact component={Home}/>
          {/* <Route path={"/product"} render={()=><Product item={json.products[1]}></Product>}/> */}
          <Route path={"/product/:id"} component={ProductView}/>
          <Route render={()=><Redirect to={"/"}/>}/>
        </Switch>
        {/* <Product item={json.products[1]}></Product> */}
        
    </div>
  );
}

export default App;
