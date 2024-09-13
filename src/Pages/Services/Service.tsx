import { ArrowRightOutlined } from "@ant-design/icons";
import logo from "../../assets/BFCS LOGO/BFCS LOGO.png";
import img7 from "../../assets/cleangadget.jpg";
import img8 from "../../assets/Contact.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Button, Card } from "antd";
import CommercialCleaning from "../../assets/Commercial cleaning.jpg";
import carpetCleaning from "../../assets/carpet cleaning.jpg";
import oneOffDeepCleaning from "../../assets/One-off deep cleaning.jpg";
import endOfTenancy from "../../assets/End of tenancy.jpg";
import windowCleaning from "../../assets/Window cleaning.jpg";
import ovenCleaning from "../../assets/Oven cleaning.jpg";
import EcoFriendlyCleaning from "../../assets/Eco-friendly cleaning.jpg";
import DomesticCleaning from "../../assets/Domestic cleaning.jpg";
import EmergencyCleaning from "../../assets/Emergency cleaning.jpg";
import PartyCleaning from "../../assets/Party Cleaning.jpg";

const services = [
  {
    title: "Commercial cleaning",
    description: "Professional cleaning services for businesses.",
    image: CommercialCleaning,
  },
  {
    title: "Domestic cleaning",
    description: "Regular cleaning services for homes.",
    image: DomesticCleaning,
  },
  {
    title: "One-off deep cleaning",
    description: "Intensive cleaning for special occasions or move-outs.",
    image: oneOffDeepCleaning,
  },
  {
    title: "End of tenancy",
    description: "Thorough cleaning before handing back a property.",
    image: endOfTenancy,
  },
  {
    title: "Carpet cleaning",
    description: "Professional carpet cleaning services.",
    image: carpetCleaning,
  },
  {
    title: "Oven cleaning",
    description: "Deep cleaning of ovens and cooktops.",
    image: ovenCleaning,
  },
  {
    title: "Window cleaning",
    description: "Professional window cleaning services.",
    image: windowCleaning,
  },
  {
    title: "Eco-friendly cleaning",
    description: "Using environmentally friendly products.",
    image: EcoFriendlyCleaning,
  },
  {
    title: "Emergency cleaning",
    description: "Quick and efficient cleaning for urgent situations.",
    image: EmergencyCleaning,
  },
  {
    title: "Party cleaning",
    description: "Cleaning up after parties or events.",
    image: PartyCleaning,
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { Meta } = Card;
  return (
    <div>
      <div>
        <div className="bg-black absolute top-0 bg-opacity-45 h-[100vh] w-[100%] carouselBg">
          <div
            data-aos="fade-right"
            className=" flex flex-col gap-[20px] justify-center place-items-center mt-[150px] carouselItem"
          >
            <img src={logo} className="w-[10%]" alt="" />

            <h1 className="text-[70px] text-white font-extrabold">SERVICES</h1>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {services.map((service) => (
            <Card
              hoverable
              style={{ width: 240 }}
              className=" bg-white rounded-lg shadow-md w100"
              data-aos="fade-right"
              cover={<img alt={service.title} src={service.image} />}
            >
              <div className="flex flex-col gap-3 w100">
                <Meta title={service.title} description={service.description} />
                <a href="/contactUs" className="flex justify-between">
                  <Button type="primary" size="large" className="w-[100%]">
                    Learn More
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className=" flex flex-col pt-[20px]">
        <div className=" flex flex-col pt-[20px]">
          <h1
            data-aos="fade-right"
            className="text-[30px] text-center text-[#005883] font-bold h1"
          >
            SERVICES & PRICE
          </h1>
          <div className="flex flex-col justify-center place-items-center px-[100px] py-[40px] p20 gap-[30px]">
            <h1
              data-aos="fade-right"
              className="text-center w-[70%] w100 textJustify"
            >
              <span className="text-[50px]">O</span>
              <span className="font-bold">
                UR DOMESTIC CLEANING RATES At BFCS,
              </span>{" "}
              we strive to offer our customers professional cleaning services
              that are both high-quality and affordable. Our pricing is
              competitive and straightforward. Our rates for domestic and
              commercial cleaning are among the most competitive in London.
            </h1>
            <h1
              data-aos="fade-right"
              className="text-center w-[70%] w100 textJustify"
            >
              <span className="text-[50px]">E</span>
              <span className="font-bold">
                NJOY OUR AFFORDABLE CLEANING RATES,
              </span>{" "}
              If you need a domestic cleaner on a weekly or bi-weekly basis, our
              rates start at just £20.00 per hour. For a “one-off spring clean,”
              the cost begins at £27.00 per hour, payable via debit card,
              cheque, or cash. Please note that a deposit is required for our
              “one-off” cleaning service. To ensure we consistently deliver
              top-notch service, our cleaning company conducts regular quality
              control checks. Please be aware:{" "}
              <span className="text-[#005883]">
                Terms & Conditions of Service may apply.
              </span>
            </h1>
          </div>
        </div>
        <div className=" bg-white flex  justify-between place-items-center px-[100px] py-[40px] p20 gap-[30px]">
          <div className="w-[50%] bg-[#ebebeb87] flex flex-col gap-[15px] w100 WCU p-[40px] rounded-lg">
            <ul className="list flex flex-col gap-[15px] text-justify h3">
              <li data-aos="fade-right">
                2 hours minimum for Regular Domestic Cleaning –
                <a href="/contactUs" className="text-[#005883]">
                  weekly £20.00 per hour
                </a>
              </li>
              <li data-aos="fade-right">
                3 hours minimum for Regular Domestic Cleaning –
                <a href="/contactUs" className="text-[#005883]">
                  fortnightly £20.00 per hour
                </a>
              </li>
              <li data-aos="fade-right">
                Weekly Regular Domestic Cleaning –
                <a href="/contactUs" className="text-[#005883]">
                  6+ hours per week £18.00 Per hour
                </a>
              </li>
              <li data-aos="fade-right">
                Weekly Regular Domestic Cleaning –
                <a href="/contactUs" className="text-[#005883]">
                  10+ hours per week £17.00 Per hour
                </a>
              </li>
              <li data-aos="fade-right">
                Weekly Regular Domestic Cleaning –
                <a href="/contactUs" className="text-[#005883]">
                  20+ hours per week £16.00 Per hour
                </a>
              </li>
              <li data-aos="fade-right">
                5 hours minimum for One-Off and Spring Cleaning –
                <a href="/contactUs" className="text-[#005883]">
                  £27.00 per hour
                </a>
              </li>
              <li data-aos="fade-right">
                5 hours minimum for After Builders Cleaning –
                <a href="/contactUs" className="text-[#005883]">
                  £29.00 Per hour (Includes labour, materials and equipment)
                </a>
              </li>

              <li data-aos="fade-right">
                For End Of Tenancy Cleaning, please call for a Free Quote on –
                <a href="tel:07516 743557" className="text-[#005883]">
                  07516 743557
                </a>
              </li>
              <li data-aos="fade-right">
                For Hard Floor Cleaning The Prices start from –
                <a href="tel:07516 743557" className="text-[#005883]">
                  £3.50 Per sq m or Call for a Free Quote
                </a>
              </li>
            </ul>
          </div>
          <img
            data-aos="fade-left"
            src={img8}
            className="w-[40%] none"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
