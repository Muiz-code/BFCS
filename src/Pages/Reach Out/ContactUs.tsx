import logo from "../../assets/BFCS LOGO/BFCS LOGO.png";
import img7 from "../../assets/cleangadget.jpg";
import img1 from "../../assets/Spray.jpg";
import ContactForms from "../../Components/ContactForm";
import AOS from "aos";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <div className="bg-black absolute top-0 bg-opacity-45 h-[100vh] h50vh w-[100%] carouselBg">
          <div
            data-aos="fade-right"
            className=" flex flex-col gap-[20px] justify-center place-items-center mt-[150px] carouselItem contact"
          >
            <img src={logo} className="w-[10%]" alt="" />

            <h1 className="text-[70px] text-white font-extrabold line-height1">
              CONTACT US
            </h1>
          </div>
        </div>
        <div>
          <img src={img7} className="w-screen h-[100vh] h50vh" alt="" />
        </div>
      </div>
      <div className="w-[100%] p-5 justify-between place-items-center flex">
        <div data-aos="fade-right " className="w-[46%] w100">
          <ContactForms
            width="bg-[#ebebeb87]"
            inputWidth="w-[100%]"
            inputWidth1="py-4"
          />
        </div>
        <div className="w-[46%] none" data-aos="fade-left">
          <img src={img1} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
