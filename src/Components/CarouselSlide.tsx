import React, { useEffect } from "react";
import { Carousel } from "antd";
import img1 from "../assets/CleaningFloor.jpg";
import img2 from "../assets/FloorMopping.jpg";
import img3 from "../assets/GlassClean.jpg";
import AOS from "aos";
import logo from "../assets/BFCS LOGO/BFCS LOGO.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import Forms from "./Form";

const contentStyle: React.CSSProperties = {
  height: "90vh",
  color: "#fff",
  lineHeight: "160px",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
};

const CarouselSlide: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Carousel autoplay style={{ fontFamily: "SUSE" }}>
      <div className="relative">
        <img src={img1} className="w-screen" style={contentStyle} />
        <div className="bg-black absolute top-0 bg-opacity-45 h-[100vh] w-[100%] carouselBg">
          <div
            data-aos="fade-right"
            className="flex flex-col px-[5%] gap-[20px] justify-center p-5 mt-[150px] carouselItems"
          >
            <img src={logo} className="w-[10%]" alt="" />
            <h1 className="text-[70px] text-white font-extrabold line-height">
              LET US HANDLE <br /> YOUR CLEANING!
            </h1>
            <a
              href="/service"
              className="flex place-items-center btnMobile justify-between px-4 py-2 w-[15%] text-[15px] bg-[#005883] font-semibold text-white hover:scale-105 hover:text-white rounded-sm"
            >
              <p>SERVICES</p>
              <ArrowRightOutlined style={{ fontSize: "15px" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={img2} className="w-screen" style={contentStyle} />
        <div className="bg-black absolute top-0 bg-opacity-45 h-[100vh] w-screen">
          <div className="flex px-[5%] flex-col gap-[20px] justify-center p-5 mt-[150px] carouselItems">
            <img src={logo} className="w-[10%]" alt="" />
            <div data-aos="fade-right" className="flex flex-col gap-[5px] ">
              <h1 className="text-[70px] text-white font-extrabold">
                WHY CHOOSE US
              </h1>
              <p className="text-[20px] text-white font-medium">
                FIND OUT WHY YOU SHOULD CHOOSE <br />
                OUR PROFESSIONAL CLEANING COMPANY
              </p>
            </div>
            <div className="flex gap-[15px] w-[100%] p5">
              <a
                href="/contactUs"
                className="flex place-items-center btnMobile justify-between px-4 py-2 w-[15%] w100 text-[15px] bg-[#005883] font-semibold text-white hover:scale-105 hover:text-white rounded-sm"
              >
                <p>BOOK US</p>
                <ArrowRightOutlined style={{ fontSize: "15px" }} />
              </a>
              <a
                href="/aboutUs"
                className="flex place-items-center btnMobile justify-between px-4 py-2 w-[15%] w100 text-[15px] bg-[#005883] font-semibold text-white hover:scale-105 hover:text-white rounded-sm"
              >
                <p>ABOUT US</p>
                <ArrowRightOutlined style={{ fontSize: "15px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={img3} className="w-screen" style={contentStyle} />
        <div className="bg-black absolute top-0 bg-opacity-45 h-[100vh] w-screen">
          <div
            data-aos="fade-right"
            className="flex gap-[50px] px-[5%] mt-[150px] w-[100%] justify-center carouselItems carouselItemsform"
          >
            <div className="hide show justify-center">
              <img src={logo} className="w-[10%]" alt="" />
            </div>
            <h1 className="text-[60px] text-white font-extrabold w-[50%] w100">
              THE CLEANING COMPANY <br /> YOU CAN TRUST
            </h1>
            <div className="none w-[50%]">
              <Forms
                width="w-[100%]"
                inputWidth1="w-[100%]"
                inputWidth="w-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselSlide;
