import { ArrowRightOutlined } from "@ant-design/icons";
import logo from "../../assets/BFCS LOGO/BFCS LOGO.png";
import img7 from "../../assets/cleangadget.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP I.jpg";
import img2 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP II.jpg";
import img3 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP III.jpg";
import img4 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP IV.jpg";
import img5 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP V.jpg";
import img6 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP VI.jpg";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <div className="bg-black absolute top-0 bg-opacity-45 h-[100vh] w-[100%] carouselBg">
          <div
            data-aos="fade-right"
            className=" flex flex-col gap-[20px] justify-center place-items-center mt-[150px] carouselItem"
          >
            <img src={logo} className="w-[10%]" alt="" />

            <h1 className="text-[70px] text-white font-extrabold line-height1">
              SERVICES
            </h1>
            <p className="text-white text-justify w-[70%]">
              At BFCS, we offer comprehensive cleaning solutions for both
              residential and commercial spaces. Our experienced team uses
              eco-friendly products and advanced techniques to deliver
              exceptional results. Whether you need a one-time deep clean or
              regular maintenance, we're here to provide reliable and efficient
              service. Contact us today to schedule a free consultation and
              experience the BFCS difference.
            </p>
            <a
              href="#"
              className="flex place-items-center btnMobile justify-between px-4 py-2 w-[15%] text-[15px] bg-[#005883] font-semibold text-white hover:scale-105 hover:text-white rounded-sm"
            >
              <p>CONTACT US</p>
              <ArrowRightOutlined style={{ fontSize: "15px" }} />
            </a>
          </div>
        </div>
        <div>
          <img src={img7} className="w-screen h-[100vh]" alt="" />
        </div>
      </div>
      <div
        data-aos="fade-down"
        className="bg-[#ebebeb87] flex flex-col justify-center place-items-center px-[50px] py-[20px] gap-[30px] w-[100%]"
      >
        <h1 className="text-[30px] text-[#005883] font-bold h1">SERVICES</h1>
        <div className="flex flex-col gap-[40px]">
          <div className="flex gap-[50px] justify-center aboutiMG">
            <img
              src={img1}
              data-aos="fade-right"
              className="w-[20%] hover:scale-105 rounded-2xl"
              alt=""
            />
            <img
              src={img2}
              data-aos="zoom-out"
              className="w-[20%] hover:scale-105 rounded-2xl"
              alt=""
            />
            <img
              src={img3}
              data-aos="fade-left"
              className="w-[20%] hover:scale-105 rounded-2xl"
              alt=""
            />
          </div>
          <div className="flex gap-[50px] justify-center aboutiMG">
            <img
              src={img5}
              data-aos="fade-right"
              className="w-[20%] hover:scale-105 rounded-2xl"
              alt=""
            />
            <img
              src={img6}
              data-aos="zoom-out"
              className="w-[20%] hover:scale-105 rounded-2xl"
              alt=""
            />
            <img
              src={img4}
              data-aos="fade-left"
              className="w-[20%] hover:scale-105 rounded-2xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
