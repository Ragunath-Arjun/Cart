import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    return (
      <>
    <Header></Header>
    <Cart></Cart>
    </>
    );
}

function Cart() {
  const [cart,setCart]=useState(0);

  return (
    <>
        <div className="Header">
        <h6 className="Header-head"><h1>Shop in style</h1>
          With this shop hompeage template
        </h6>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Fancy Product</h5>
                <p className="card-text"> $40.00 - $80.00</p>
                <button className="btn btn-primary" onClick={()=>{setCart(cart+1)}}>Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Fancy Product</h5>
                <p className="card-text"> $40.00 - $80.00</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Fancy Product</h5>
                <p className="card-text"> $40.00 - $80.00</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Fancy Product</h5>
                <p className="card-text"> $40.00 - $80.00</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Fancy Product</h5>
                <p className="card-text"> $40.00 - $80.00</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Fancy Product</h5>
                <p className="card-text"> $40.00 - $80.00</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Fancy Product</h5>
                <p className="card-text"> $40.00 - $80.00</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Fancy Product</h5>
                <p className="card-text"> $40.00 - $80.00</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer">
        <h6 className="Footer-head">Copyright © Your Website 2022</h6>
      </div>
    </>
  );
}

export default App;
