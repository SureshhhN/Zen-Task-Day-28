
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./card";
import Order from "./order";
import { useState } from "react";

function App() {
const product=[
    {
      title: "Camera",
      price: "555",
      id: 1,
    },
    {
      title: "Sun-glasses",
      price: "120",
      id: 2,
    },
    {
      title: "Suits",
      price: "650",
      id: 3,
    },
  ];

 const [total,price]=useState(0);
 const [cart,add]=useState([]);

  let items = (id)=>{

var index=product.findIndex((obj)=>obj.id===id)
var pro=product[index];
pro.incart=true;
    add([...cart,pro]);
    price(+total+ +product[index].price);
    
   
  }

  
  let X = (id)=>{
    var index=cart.findIndex((obj)=>obj.id===id)
   
    price(total-cart[index].price);
       cart.splice(index,1);
       
   add([...cart]) ;
  
          
      }

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {product.map((product) => {
              return <Card cartitems={cart} name={product} addtocart={items}></Card>;
            })}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row">
            <h2>Cart</h2>
            <div className="col-lg-12">
              <ol>
                {
                cart.map((i)=>{return (<Order itemname={i} del={X} > </Order>)})
                }
                </ol>
              <h3>Total : ${total}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;