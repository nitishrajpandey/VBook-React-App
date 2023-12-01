// import React from 'react'
import { socialMedia } from "../Assets";

function FooterArea() {
  return (
    <div>
      <footer className="flex justify-between bg-[#343947] py-[17px] items-center px-5">
        <div className=" flex gap-2 items-center ">
          <img src={socialMedia} alt="social media icon" className="w-[40px]" />
          <h1 className="font-semibold text-[#00BD98] text-3xl">VBook</h1>
        </div>
        <div>
          <p className="text-white hidden xs:block">
            © 2023 Nitish Raj. All Rights Reserved.
          </p>
        </div>
        <div className=""></div>
      </footer>
    </div>
  );
}

export default FooterArea;
