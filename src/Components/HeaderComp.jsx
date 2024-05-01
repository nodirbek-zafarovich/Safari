import React from "react";
import Logo from "../assets/Logo.svg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const HeaderComp = () => {
  return (
    <div className="py-5 container mx-auto  bg-slate-100">
      <div className=" flex text-center items-center container mx-auto">
        <div>
          <ul className=" px-[157px] container flex gap-[60px] ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Clothes</a>
            </li>
            <li>
              <a href="#">Shoes</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-[208px]">
          <img src={Logo} alt="Logo image" />
          <input
            type="Search"
            placeholder="search"
            className="bg-transparent"
          />
        </div>
        <div className="flex gap-[39px]">
          <FaMagnifyingGlass />
          <FaUser />
          <FaCartShopping />
          <FaHeart />
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;
