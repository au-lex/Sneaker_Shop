import React, { useState, useEffect } from "react";
import heroImg1 from "../assets/images/image-product-1.jpg";
import heroImg2 from "../assets/images/image-product-2.jpg";
import heroImg3 from "../assets/images/image-product-3.jpg";
import heroImg4 from "../assets/images/image-product-4.jpg";

const Hero = ({addtoCart}) => {
const[products] = useState([
  { id:1, name: "shoe1", price:250 , Img:heroImg1},
  { id:2, name: "shoe2", price:200 , Img:heroImg2},
  { id:3, name: "shoe3", price:20 , Img:heroImg3},
  { id:4, name: "shoe4", price:50 , Img:heroImg4},
]);


  const imagesGallery = [heroImg1, heroImg2, heroImg3, heroImg4];

  const images = [heroImg1, heroImg2, heroImg3, heroImg4];
  const [Currentimage, Setcurrentimage] = useState(0);
  const [CurrentimageG, SetcurrentimageG] = useState(0);

const [Qty, SetQty] = useState(1)
const currentProduct = products[Currentimage];


  const nextEl = () => {
    const lastimg = images.length - 1;
    const restimgindex = Currentimage === lastimg;
    const firstimg = restimgindex ? 0 : Currentimage + 1;
    Setcurrentimage(firstimg);
  };

  const prevEL = () => {
    const lastimg = images.length - 1;
    const restimgindex = Currentimage === 0;
    const firstimg = restimgindex ? lastimg : Currentimage - 1;
    Setcurrentimage(firstimg);
  };

  useEffect(() => {
    const slide = setTimeout(nextEl, 4000);
    return () => clearInterval(slide);
  }, [Currentimage]);




  return (
    <>
      <section className=" mt-[3rem] lg:mt-[10rem]  relative lg:top-[20rem] ">
        <div className="lg:hidden">
          <section className="btn relative ">
            <span
              onClick={prevEL}
              className="absolute left-4 top-[10rem] bg-slate-100  rounded-full py-3 px-4 z-40"
            >
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1 3 9l8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </span>
            <span
              onClick={nextEl}
              className="absolute right-4  top-[10rem] bg-slate-100  rounded-full py-3 px-4 z-40"
            >
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </span>
          </section>
          <div className="sliderContainer  image-container w-[390px] h-[390px] shadow-md  relative">
            {products.map((product, index) => (
              <img
                src={product.Img}
                alt=""
                key={index}
                className={
                  index === Currentimage
                    ? "slider-image active"
                    : "slider-image"
                }
              />
            ))}
          </div>


          <section className="desc px-6 mt-[3rem] lg:mt-[8rem]">
          <h4 className="uppercase text-orange-500 font-bold  my-1">
            Sneaker Company{" "}
          </h4>
          <h1 className="uppercase text-[1.6rem] font-semibold lg:text-[2.3rem] lg:font-bold">
            Fall Limited Edition <br />
            Sneakers
          </h1>
          <div className="desc my-3 ">
           <p> These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
            </p>
          </div>

          <section className="price flex  justify-between my-6 lg:flex-col lg:flex">
            <div className="flex space-x-4">
              <h1 className="text-[1.6rem] font-bold">$125.00</h1>
              <h1 className="bg-orange-50 px-3 py-2 text-orange-600 font-semibold rounded-md">
                50%
              </h1>
            </div>
            <h1 className=" line-through font-medium text-gray-400 ">
              $250.00
            </h1>
          </section>
          <div className=" flex  flex-col">
          <section className="btnContainer my-4 lg:my-0">
            <div className="increase bg-slate-200 flex justify-between px-4 py-2 h-12 w-full
             rounded-lg ">
              <h4 onClick={()=> {if (Qty > 1)SetQty(Qty-1)}} className=" cursor-pointer
               text-orange-600 font-bold">-</h4>
              <h4 className="font-bold">{Qty}</h4>
              <h4  onClick={()=> SetQty(Qty+1)} className=" cursor-pointer text-orange-600 font-bold">+</h4>
            </div>
          </section>
          <section className="addtoCart mb-[8rem] ">
            <button onClick={()=> addtoCart(currentProduct, Qty)} className="  bg-orange-600 
             rounded-lg 
             block w-full h-12 text-slate-100 font-medium cursor-pointer   lg:w-[12rem] lg:mx-4 lg:py-2">
              Add to cart
            </button>
          </section>
          </div>
        </section>

        </div>
   

 
  <section className="imageGallery flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  

<div>

   
   <section className="thumnailContainer mt-[4rem] hidden lg:block mr-28">
    <section className="fullImg">

    <div className="w-[450px] h-[450px] fullimg">
      <img src={imagesGallery[CurrentimageG]} alt=""  className="rounded-[20px]"/>
    </div>
    </section>

    <section className="smallImg my-10 flex  space-x-10">

      {imagesGallery.map((imgG, index) => (

<div className="w-[80px] h-[80px] thumnail" key={index}>
<img
  src={imgG}
  alt=""
  className={`rounded-[6px] ${index === CurrentimageG ? "active" : ""} cursor-pointer`}
  onClick={() => SetcurrentimageG(index)}
/>
</div>


      ))}
  
    </section>
   </section>
   </div>


        <section className="desc px-6 mt-[0rem] lg:mt-[8rem] hidden lg:block">
          <h4 className="uppercase text-orange-500 font-bold  my-1">
            Sneaker Company{" "}
          </h4>
          <h1 className="uppercase text-[1.6rem] font-semibold lg:text-[2.3rem] lg:font-bold">
            Fall Limited Edition <br />
            Sneakers
          </h1>
          <div className="desc my-3 ">
           <p> These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
            </p>
          </div>

          <section className="price flex  justify-between my-6 lg:flex-col lg:flex">
            <div className="flex space-x-4">
              <h1 className="text-[1.6rem] font-bold">$125.00</h1>
              <h1 className="bg-orange-50 px-3 py-2 text-orange-600 font-semibold rounded-md">
                50%
              </h1>
            </div>
            <h1 className=" line-through font-medium text-gray-400 ">
              $250.00
            </h1>
          </section>
          <div className=" flex ">
          <section className="btnContainer my-4 lg:my-0">
            <div className="increase bg-slate-200 flex justify-between px-4 py-2 h-12
             rounded-lg lg:w-[12rem]">
              <h4 onClick={()=> {if (Qty > 1)SetQty(Qty-1)}} className=" cursor-pointer
               text-orange-600 font-bold">-</h4>
              <h4 className="font-bold">{Qty}</h4>
              <h4  onClick={()=> SetQty(Qty+1)} className=" cursor-pointer text-orange-600 font-bold">+</h4>
            </div>
          </section>
          <section className="addtoCart mb-[8rem] ">
            <button onClick={()=> addtoCart(currentProduct, Qty)} className="  bg-orange-600 
             rounded-lg 
             block w-full h-12 text-slate-100 font-medium cursor-pointer   lg:w-[12rem] lg:mx-4 lg:py-2">
              Add to cart
            </button>
          </section>
          </div>
        </section>

        </section>
  
      </section>

    

    </>
  );
};

export default Hero;
