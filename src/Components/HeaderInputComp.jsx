import React from "react";

const HeaderInputComp = () => {
  return (
    <div className="container mx-auto">
      <div className=" flex py-[64px] px-[231px]">
        <div>
          <div className=" my-[64px]">
          <h1 className=" text-2xl my-[30px] font-extrabold w-[169px] h-[18px]">
            Hello there!
          </h1>
          <p className="font-normal">
            Please sign in or create account to continue
          </p>
          </div>
          <div className="flex">
            <div>
              <p className="text-xl font-extrabold w-[169px] h-[18px]">
                Sign In
              </p>
              <p className="font-normal my-[32px]">Email</p>
              <input
                type="email"
                className=" border border-black w-[409px] h-[60px] rounded-[10px]"
              />
              <p className="font-normal my-[32px]">Password</p>
              <input
                type="password"
                className="border border-black  caret-black w-[409px] h-[60px] rounded-[10px]"
              />
              <div className="flex gap-[10px] my-[20px] items-center text-center">
                <input type="checkbox" className="w-[20px] h-[50px]" />
                <h2>Remeber my details</h2>
              </div>
              <button className=" text-white bg-pink-500 rounded-[10px] w-[409px] h-[60px]">
                SIGN IN
              </button>
              <p className="py-[30px]">Forgot password?</p>
            </div>
            <div className=" mx-[160px] ">
              <h1 className=" text-xl font-extrabold w-[179px] h-[20px]">
                CREATE ACCOUNT
              </h1>
              <p className="font-normal my-[31px]">First name</p>
              <input
                type="text"
                className="border border-black  caret-black w-[409px] h-[60px] rounded-[10px]"
              />
              <p className="font-normal my-[32px]">Last name</p>
              <input
                type="text"
                className="border border-black  caret-black w-[409px] h-[60px] rounded-[10px] "
              />
              <p className="font-normal my-[32px]">Email</p>
              <input
                type="email"
                className="border border-black  caret-black w-[409px] h-[60px] rounded-[10px] "
              />
              <p className="font-normal my-[32px]">Create Password</p>
              <input
                type="password"
                className="border border-black  caret-black w-[409px] h-[60px] rounded-[10px] "
              />
              <p className="font-normal my-[32px]">Confirm Password</p>
              <input
                type="password"
                className="border border-black  caret-black w-[409px] h-[60px] rounded-[10px] "
              />
              <div className="flex gap-[20px] my-[35px] items-center ">
                <input type="checkbox" className="w-[30px] h-[50px]" />
                <h2>
                  I want to receive Safari newsletters with the best deals and
                  offers
                </h2>
              </div>
              <button className=" text-white bg-pink-500 rounded-[10px] w-[409px] h-[60px]">
                CREATE ACCOUNT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInputComp;
