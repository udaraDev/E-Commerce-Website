import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            ullam beatae. Architecto natus veniam autem quasi aliquam iure
            alias? Deserunt, laboriosam ex. Amet officiis porro, molestias
            assumenda velit nulla. At.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Price</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+94774081153</li>
            <li>contactforever@gmail.com</li>
          </ul>
        </div>
      </div>
      <div >
            <hr/>
            <p className="py-5 text-sm text-center">Copyright 2024@ forever.com - All Right</p>
      </div>
    </div>
  );
};

export default Footer;
