
import '../App.css';

export function Product(props){
    let title = props.item.title;
    let img = props.item.image;
    let price = props.item.price;
        return (<div className="Product">
            <h4>{title}</h4>
            <img src={img}/>
            <div>
                <button>SUMAR AL CARRITO</button>
                <h2>${price}</h2>
            </div>
        </div>)
}