import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  RightCircleOutlined,
  SkypeOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import Form from "./Form";
import { useEffect } from "react";
import AOS from "aos";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col w-[100%]">
      <div className="flex justify-between p-[50px] w-[100%] p0 w100">
        <div className="flex flex-col gap-5 w-[24%]">
          <h1 className="bg-[#005883] text-white px-[100px] py-3 px py h2">
            NAVIGATION
          </h1>
          <ul className="flex flex-col gap-[30px] items gap">
            <li className="hover:scale-105 flex gap-3 hover:underline">
              <RightCircleOutlined />
              <a href="/">HOME</a>
            </li>

            <li className="hover:scale-105 flex gap-3 hover:underline">
              <RightCircleOutlined />
              <a href="/services">SERVICES</a>
            </li>

            <li className="hover:scale-105 flex gap-3 hover:underline">
              <RightCircleOutlined />
              <a href="/aboutus">ABOUT US</a>
            </li>

            <li className="hover:scale-105 flex gap-3 hover:underline">
              <RightCircleOutlined />
              <a href="/contactus">CONTACT</a>
            </li>
            <li className="hover:scale-105 flex gap-3 hover:underline">
              <RightCircleOutlined />
              <a href="/contactus">BOOK ONLINE</a>
            </li>
            <li className="hover:scale-105 flex gap-3 hover:underline">
              <RightCircleOutlined />
              <a href="/contactus">JOIN OUR TEAM</a>
            </li>
            <li className="hover:scale-105 flex gap-3 hover:underline">
              <RightCircleOutlined />
              <a href="/tellafriend">TELL A FRIEND</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 w-[24%]">
          <h1 className="bg-[#005883] text-white px-[100px] py-3 px py h2">
            CONTACT US
          </h1>
          <ul className="flex flex-col gap-[30px] items gap">
            <li>
              <a href="tel:07516 743557">
                <PhoneOutlined /> 07516 743557
              </a>
            </li>
            <li>
              <a href="tel:07516 743557">
                <WhatsAppOutlined /> 07516 743557
              </a>
            </li>
            <li>
              <a href="skype:username?call">
                <SkypeOutlined /> 07516 743557
              </a>
            </li>
            <li>
              <a href="mailto:info@BFCS.co.uk">
                <MailOutlined /> info@BFCS.co.uk
              </a>
            </li>
            <li className="">
              Registered in Country: 1234567 <br />
              VAT Registration No. 9998887765
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 w-[24%]">
          <h1 className="bg-[#005883] text-white px-[100px] py-3 px py h2">
            FOLLOW US
          </h1>
          <div className="flex flex-col gap-[30px] gap">
            <a href="www.facebook.com" className="flex gap-3 hover:underline">
              <FacebookOutlined />
              <p>Facebook</p>
            </a>
            <a href="www.instagram.com" className="flex gap-3 hover:underline">
              <InstagramOutlined />
              <p>Instagram</p>
            </a>
            <a href="www.skype.com" className="flex gap-3 hover:underline">
              <SkypeOutlined />
              <p>Skype</p>
            </a>
            <a href="mailto:" className="flex gap-3 hover:underline">
              <MailOutlined />
              <p>Mail</p>
            </a>
            <a href="" className="flex gap-3 hover:underline">
              <YoutubeOutlined />
              <p>Youtube</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5 none w-[24%]">
          <h1 className="bg-[#005883] flex place-items-center justify-center text-white px-[100px]  py-3 h1">
            REACH OUT
          </h1>
          <Form />
        </div>
      </div>
      <div className="flex justify-center bg-[#005883] p-4 text-white h2">
        <p>&#0169; 2024 BFCS. ALL RIGHT RESERVED. LOCATION. XML</p>
      </div>
    </div>
  );
};

export default Footer;
