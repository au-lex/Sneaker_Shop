import React, { useState, useEffect } from "react";
import heroImg1 from "../assets/images/image-product-1.jpg";
import heroImg2 from "../assets/images/image-product-2.jpg";
import heroImg3 from "../assets/images/image-product-3.jpg";
import heroImg4 from "../assets/images/image-product-4.jpg";

const Hero = () => {
  const images = [heroImg1, heroImg2, heroImg3, heroImg4];
  const [Currentimage, Setcurrentimage] = useState(0);

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
      <section>
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
            {images.map((img, index) => (
              <img
                src={img}
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
        </div>
        <section className="desc px-6 mt-6">
          <h4 className="uppercase text-orange-500 font-bold  my-1">
            Sneaker Company{" "}
          </h4>
          <h1 className="uppercase text-[1.6rem] font-semibold">
            Fall Limited Edition <br />
            Sneakers
          </h1>
          <div className="desc my-3">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </div>

          <section className="price flex  justify-between my-6">
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
          <section className="btnContainer my-4">
            <div className="increase bg-slate-200 flex justify-between px-4 py-2 rounded-lg">
              <h4 className=" cursor-pointer text-orange-600 font-bold">-</h4>
              <h4 className="font-bold">0</h4>
              <h4 className=" cursor-pointer text-orange-600 font-bold">+</h4>
            </div>
          </section>
          <section className="addtoCart mb-[8rem]">
            <button className=" bg-orange-600  rounded-lg  block w-full h-12 text-slate-100 font-medium cursor-pointer">
              Add to cart
            </button>
          </section>
        </section>
      </section>

    

    </>
  );
};

export default Hero;
