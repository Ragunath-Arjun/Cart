import { useState } from "react";

export default function Card(props){
    const [cart,setCart]=useState(0);

    return(
    <div className="col-lg-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Rs.{props.price}</p>
                <button className="btn btn-primary" onClick={()=>{setCart(cart+1)}}>Add to Cart</button>
              </div>
            </div>
          </div>
    )
}