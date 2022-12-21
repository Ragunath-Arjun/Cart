import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Cart from "./Cart";

function App() {
  let Products = [
    {
      id:1,
      name: "Oneplus",
      price: 30000,
      image:
        "https://fdn.gsmarena.com/imgroot/reviews/20/oneplus-nord/review/lifestyle/-1024w2/gsmarena_001.jpg",
    },
    {
      id:2,
      name: "iPhone",
      price: 90000,
      image:
        "https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg",
    },
    {
      id:3,
      name: "Xiomi",
      price: 22000,
      image:
        "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1666990136/Croma%20Assets/Communication/Mobiles/Images/251109_cxhhaq.png/mxw_1440,f_auto",
    },
    {
      id:4,
      name: "Samsung",
      price: 28000,
      image: "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY606_.jpg",
    },
    {
      id:5,
      name: "Sony",
      price: 25000,
      image: "https://www.zdnet.com/a/img/resize/b153b7eeee02c48a45e2dc0cd73406970dad1b7d/2022/01/20/4c865ce2-9b6a-43a8-a9b9-80351289021b/sony-xperia-pro-i-2.jpg?auto=webp&fit=crop&height=1200&width=1200",
    },
    {
      id:6,
      name: "Realme",
      price: 12000,
      image: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G349604_View_1/mobiles/smartphones/realme-c35-128-gb-glowing-green-4-gb-ram-.jpg",
    },

  ];
  const [cartList, setCart] = useState([]);
  const [Total,setTotal]= useState(0);
  const[header,setHeader]=useState(0);

  let addToCart=(product)=>{
    setCart([...cartList,product]);
    setTotal(Total+product.price);
    setHeader(header+1)
    console.log(cartList)

  }
  let removeCart=(product)=>{
    let itemIndex = cartList.findIndex(item => product.id === item.id);
    cartList.splice(itemIndex,1);
    setCart([...cartList])
    setTotal(Total-product.price)
  }


  return (
    <>
      <Header header={header}></Header>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
          {Products.map((product) => {
            return <Card product={product} addToCart={addToCart} ></Card>;
          })}
          </div>
          </div>
          <div className="col-3">
            <h2>Cart</h2>
          <Cart cartList={cartList} removeCart={removeCart}/>
          <h3>Total :{Total}</h3>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
