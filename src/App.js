import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card"

function App() {
    return (
      <>
    <Cart></Cart>
    </>
    );
}

function Cart() {
  const [cart,setCart]=useState(0);

  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="row">
          <Card name="Oneplus" price="30,000"></Card>
          <Card name="iPhone" price="90,000"></Card>
          <Card name="Xiomi" price="22,000"></Card>
          <Card name="Samsung" price="28,000"></Card>
          <Card name="Sony" price="25,000"></Card>
          <Card name="Realme" price="12,000"></Card>
          <Card name="Redmi" price="10,000"></Card>
          <Card name="Google Pixel" price="38,000"></Card>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
