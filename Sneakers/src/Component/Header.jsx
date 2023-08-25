import React from "react";
import profile from "../assets/images/image-avatar.png";
import "../Component/Hero"
const Header = ( {Cart}) => {

  return (
    <>
    <div className="w-[100%]">
      <section className="mainContainer flex justify-between lg:px-[15rem] py-6  px-4  bg-slate-100  z-[1000] fixed w-full  ">
        <section className="flex space-x-4  ">
          <div className="menu mt-1 lg:hidden">
            <span
              className="openMenue"
              onClick={() => {
                const menuContainer = document.querySelector(".sideMenu");
                menuContainer.classList.add("active");
              }}
            >
              <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
                  fill="#69707D"
                  fill-rule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className="logo lg:flex lg:space-x-6 lg:pl-32 ">
            
            <svg width="138" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z"
                fill="#1D2026"
                fill-rule="nonzero"
              />
            </svg>

            
            <div className=" hidden lg:flex">
            <a href="#" className="block text-gray-700  font-bold mx-2">
                Collections
              </a>
              <a href="#" className="block text-gray-700  font-bold mx-2">
                Men
              </a>
              <a href="#" className="block text-gray-700  font-bold mx-2">
                Women
              </a>
              <a href="#" className="block text-gray-700  font-bold mx-2">
                About
              </a>
              <a href="#" className="block text-gray-700  font-bold mx-2">
                Contact
              </a>
            </div>

            <div className="sideMenu  bg-slate-100  px-4 lg:hidden">
              <span
                className="closeMenue  absolute top-8 left-5"
                onClick={() => {
                  const menuContainer = document.querySelector(".sideMenu");
                  menuContainer.classList.remove("active");
                }}
              >
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fill="#69707D"
                    fill-rule="evenodd"
                  />
                </svg>
              </span>
              <a href="#" className="block text-gray-700  font-bold my-4">
                Collections
              </a>
              <a href="#" className="block text-gray-700  font-bold my-4">
                Men
              </a>
              <a href="#" className="block text-gray-700  font-bold my-4">
                Women
              </a>
              <a href="#" className="block text-gray-700  font-bold my-4">
                About
              </a>
              <a href="#" className="block text-gray-700  font-bold my-4">
                Contact
              </a>
            </div>
          </div>
        </section>
        <section className="flex space-x-4 lg:space-x-10">
          <div className="cart mt-1 relative">

          <span className="openCart" onClick={(()=> {
            const cartItems = document.querySelector(".cartItems");
            cartItems.classList.toggle("open")

          })}>

            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896
                0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20
                6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72
                2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 
                0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 
                .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 
                0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 
                1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fill-rule="nonzero"
                />
            </svg>


            <h2
              className="absolute top-[-.5rem] left-2 bg-orange-500
              text-slate-50 py-[0px] px-[5px] text-[12px] rounded-full"
              >
              3
            </h2>
              </span>
          
          </div>
          <div className="profile w-[32px] h-[30px]">
            <img src={profile} alt="profile" className="w-[100%]" />
          </div>
        </section>
        
      </section>

      <section className="cartContainer relative flex justify-center  ">
        
            <div className="cartItems w-[23rem]  px-8 py-4 h-[20rem] overflow-y-auto rounded-lg 
               lg:w-[30rem]
            top-10 z-50  bg-slate-100 absolute">
          <h1 className="capitalize text-[1.4rem] font-bold border-b-2 border-gray-300 mb-1">cart </h1>
              {Cart.map((item, index) => {
                return (
            <section className="flex">

             <div className="carimgContainer w-[50px] h-[50px] my-4 " key={index}>
              <img src={item.Img} alt="cartimg" className="w-[100%] rounded-lg" />
             </div>
              <figcaption className="mt-4 mx-2">
                <h3 className="capitalize font-meduim text-gray-600">fall limited  edition sneakers</h3>
                <div className="flex space-x-6">
                <h3 className="text-gray-600">$125.00 * 3 </h3>
                <h2 className="total font-extrabold">$375.00</h2>
                <h2><span><i class="ri-delete-bin-5-line text-gray-600"></i></span></h2>
  
                </div>
              </figcaption>
            </section>   
                ) 
              })}
            <div className="btn flex justify-center">
              <button className=" bg-orange-400 cursor-pointer w-full rounded-md
               text-slate-100 capitalize py-4">checkout</button>
            </div>

          
            </div>
           </section>
           </div>
    </>
  );
};

export default Header;
