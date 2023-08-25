import React, { useState } from "react";
import Header from "./Component/Header";
import Hero from "./Component/Hero";

const App = () => {
  const [Cart, setCart] = useState([{id:1, name: "shoe1", price:250, Img:"some-image-path", Qty: 2}]);


  const addtoCart = (product, qty) => {
    const newCart = [...Cart];
    const existingProductIndex = newCart.findIndex(p => p.id === product.id);

    if (existingProductIndex > -1) {
      newCart[existingProductIndex].Qty += qty;
    } else {
      product.Qty = qty;
      newCart.push(product);
    }
    setCart(newCart);
  };

  return (
    <>
      <Header Cart={Cart} />
      <Hero addtoCart={(product, qty) => addtoCart(product, qty)} />
    </>
  );
};

export default App;
