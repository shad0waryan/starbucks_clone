import React from "react";
import logo from "../assets/starbucks.png";
import appstore from "../assets/SeekPng.com_apple-app-store-logo_2228504.png";
import playstore from "../assets/SeekPng.com_play-button-png-transparent_713764.png";
function Footer() {
  return (
    <div className="flex-col bg-newgreen ">
      <div className="bg-newgreen flex justify-evenly text-white p-14 pb-20">
        <img src={logo} alt="" className="logo w-[62px] h-[62px]" />
        <div className="aboutus">
          <p className="text-s7 font-medium hover:cursor-pointer mb-2">
            About Us
          </p>
          <p className="text-s3 hover:text-newgrey hover:cursor-pointer hover:duration-200 mt-4 mb-4">
            Our Heritage
          </p>
          <p className="text-s3 hover:text-newgrey hover:cursor-pointer hover:duration-200 mt-4 mb-4">
            Our Company
          </p>
          <p className="text-s3 hover:text-newgrey hover:cursor-pointer hover:duration-200 mt-4 mb-4">
            Coffeehouse
          </p>
        </div>
        <div className="responsibility">
          <p className="text-s7 font-medium hover:cursor-pointer mb-2">
            Responsibility
          </p>
          <p className="text-s3 hover:text-newgrey hover:cursor-pointer hover:duration-200 mt-4 mb-4">
            Community
          </p>
          <p className="text-s3 hover:text-newgrey hover:cursor-pointer hover:duration-200 mt-4 mb-4">
            Ethical Sourcing
          </p>
          <p className="text-s3 hover:text-newgrey hover:cursor-pointer hover:duration-200 mt-4 mb-4">
            Environment
          </p>
          <p className="text-s3 hover:text-newgrey hover:cursor-pointer hover:duration-200 mt-4 mb-4">
            Diversity
          </p>
        </div>
        <div className="quicklinks">
          <p className="text-s7 font-medium hover:cursor-pointer mb-2">
            Quick Links
          </p>
          <p className="text-s3 hover:text-newgrey hover:cursor-pointer hover:duration-200 mt-4 mb-2">
            Careers
          </p>
          <p className="text-s3 hover:text-newgrey hover:cursor-pointer hover:duration-200 mt-4 mb-4">
            Season's Gifting
          </p>
          <p className="text-s3 hover:text-newgrey hover:cursor-pointer hover:duration-200 mt-4 mb-4">
            FAQs
          </p>
          <p className="text-s3 hover:text-newgrey hover:cursor-pointer hover:duration-200 mt-4 mb-4">
            Customer Service
          </p>
          <p className="text-s3 hover:text-newgrey hover:cursor-pointer hover:duration-200 mt-4 mb-4">
            Delivery
          </p>
        </div>

        <div className="hover:cursor-pointer w-fit h-fit">
          <p className="font-medium  text-s7">SOCIAL</p>
          <p className="font-medium text-s7">Media</p>
        </div>
        <div className="download__links flex-col ">
          <img
            src={appstore}
            alt=""
            width={"194px"}
            height={"64px"}
            className="mb-4 hover:cursor-pointer"
          />
          <img
            src={playstore}
            alt=""
            width={"194px"}
            height={"62px"}
            className="mt-4 hover:cursor-pointer bg-white p-3 rounded-md"
          />
        </div>
      </div>
      <div>
        <hr className="border-t border-lightgrey mr-24 ml-24 mb-4" />
        <p className="text-white text-s3  pb-4 pl-24">
          STARBUCKS CLONE FOR EDUCATION AND LEARNING PURPOSE
        </p>
      </div>
    </div>
  );
}

export default Footer;
