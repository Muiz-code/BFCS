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

const Footer = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between p-[50px]">
        <div className="flex flex-col gap-5">
          <h1 className="bg-[#005883] text-white px-[100px] py-3">
            NAVIGATION
          </h1>
          <ul className="flex flex-col gap-[30px]">
            <li className="hover:scale-105 flex gap-3 hover:underline">
              <RightCircleOutlined />
              <a href="">HOME</a>
            </li>
            <li className="hover:scale-105 flex gap-3 hover:underline">
              <RightCircleOutlined />
              <a href="">SERVICES</a>
            </li>
            <li className="hover:scale-105 flex gap-3 hover:underline">
              <RightCircleOutlined />
              <a href="">ABOUT US</a>
            </li>
            <li className="hover:scale-105 flex gap-3 hover:underline">
              <RightCircleOutlined />
              <a href="">CONTACT</a>
            </li>
            <li className="hover:scale-105 flex gap-3 hover:underline">
              <RightCircleOutlined />
              <a href="">BOOK US</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="bg-[#005883] text-white px-[100px] py-3">
            CONTACT US
          </h1>
          <ul className="flex flex-col gap-[30px]">
            <li>
              <a href="">
                <PhoneOutlined /> 020345677888
              </a>
            </li>
            <li>
              <a href="">
                <WhatsAppOutlined /> 020345677888
              </a>
            </li>
            <li>
              <a href="">
                <SkypeOutlined /> 020345677888
              </a>
            </li>
            <li>
              <a href="">
                <MailOutlined /> info@BFCS.co.uk
              </a>
            </li>
            <li className="">
              Registered in Country: 1234567 <br />
              VAT Registration No. 9998887765
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="bg-[#005883] text-white px-[100px] py-3">FOLLOW US</h1>
          <div className="flex gap-[30px]">
            <a href="">
              <FacebookOutlined />
            </a>
            <a href="">
              <InstagramOutlined />
            </a>
            <a href="">
              <SkypeOutlined />
            </a>
            <a href="">
              <MailOutlined />
            </a>
            <a href="">
              <YoutubeOutlined />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="bg-[#005883] text-white px-[100px] py-3">REACH OUT</h1>
          <Form />
        </div>
      </div>
      <div className="flex justify-center bg-[#005883] p-4">
        <p>&#0169; 2024 BFCS. ALL RIGHT RESERVED. LOCATION. XML</p>
      </div>
    </div>
  );
};

export default Footer;
