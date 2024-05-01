import React from "react";
import Logo from "../assets/Logo.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";

const FooterComp = () => {
  return (
    <div className="py-5 container mx-auto h-[300px]   bg-slate-100">
      <div className="flex items-center gap-[129px]  p-[60px] ">
        <div>
          <img src={Logo} alt="Logo icon" />
        </div>
        <div className="flex gap-[200px]">
          <ul className="py-2">
            <li className="py-2 text-xl text-gray-500 hover:text-black">
              About Us
            </li>
            <li className="py-2 text-xl text-gray-500 hover:text-black">
              Contact
            </li>
            <li className="py-2 text-xl text-gray-500 hover:text-black">
              Terms & Conditions
            </li>
          </ul>
          <div className="py-2 ">
            <div className="flex gap-3 py-2 text-xl text-gray-500 hover:text-black">
              <img src={Facebook} alt="Facebook icon" className="w-7 h-7" />
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ul>
            </div>
            <div className="flex gap-3 text-xl items-center text-gray-500 hover:text-black py-2">
              <img src={Twitter} alt="Twitter icon" className="w-7 h-7 " />
              <ul>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </div>
            <div className="flex gap-3 text-xl items-center text-gray-500 hover:text-black py-2">
              <img src={Instagram} alt="Instagram icon" className="w-7 h-7 " />
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-3">
            <span className="text-xl  text-gray-500  ">
              Subscribe to our newsletter
            </span>
            <div className="py-6">
              <input
                type="email"
                placeholder="Email Address"
                className="border border-pink-500 px-5 py-2 rounded-l-xl"
              />
              <button className="bg-pink-500 border border-pink-500 py-2 px-2 rounded-r-xl ">
                OK
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
