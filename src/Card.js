import { useState } from "react";

export default function Card({product,addToCart}){
    return(
    <div className="col-lg-4" >
            <div className="card">
              <img
                className="card-img-top"
                src={product.image}
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Rs.{product.price}</p>
                <button className="btn btn-primary" onClick={()=>{
                  addToCart(product)}}>Add to Cart</button>
              </div>
            </div>
          </div>
    )
}