import img1 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP I.jpg";
import img2 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP II.jpg";
import img3 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP III.jpg";
import img4 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP IV.jpg";
import img5 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP V.jpg";
import img6 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP VI.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img7 from "../../assets/GlassClean.jpg";
import img8 from "../../assets/Spray.jpg";
import { ArrowRightOutlined } from "@ant-design/icons";
import logo from "../../assets/BFCS LOGO/BFCS LOGO.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col">
      <div className="bg-black absolute top-0 bg-opacity-45 h-[100vh] w-[100%] carouselBg">
        <div
          data-aos="fade-right"
          className=" flex flex-col gap-[20px] justify-center place-items-center mt-[150px] carouselItemAbout"
        >
          <img src={logo} className="w-[10%]" alt="" />

          <h1 className="text-[70px] text-white font-extrabold line-height1">
            ABOUT US
          </h1>
          <p className="text-white text-justify w-[70%]">
            "BFCS: Your Cleaning Concierge" At BFCS, we're more than just a
            cleaning company. We're your personal cleaning concierge, dedicated
            to transforming your spaces into havens of cleanliness and comfort.
            With years of experience and a passion for perfection, we've
            mastered the art of creating spotless environments that leave you
            feeling refreshed and rejuvenated. Whether you're a busy homeowner
            or a bustling business owner, our team of skilled professionals is
            committed to delivering exceptional service that exceeds your
            expectations. We understand that a clean space is more than just a
            surface; it's a reflection of your lifestyle. That's why we go the
            extra mile to ensure every detail is taken care of. From sparkling
            kitchens to immaculate bathrooms and everything in between, BFCS is
            your one-stop solution for all your cleaning needs. Experience the
            BFCS difference today and discover the joy of a truly clean and
            organized space.
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
      <div
        data-aos="fade-down"
        className="bg-[#ebebeb87] flex flex-col justify-center place-items-center px-[50px] py-[20px] gap-[30px] w-[100%]"
      >
        <h1 className="text-[30px] text-[#005883] font-bold h1">ABOUT US</h1>
        <div className="flex flex-col gap-[40px] justify-center place-items-center">
          <div className="flex gap-[50px] justify-center aboutiMG w-[90%] overflow-auto">
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
      <div className=" bg-white flex  justify-between place-items-center px-[100px] py-[40px] p20 gap-[30px]">
        <div className="w-[50%] flex flex-col gap-[15px] w100 WCU">
          <h1 data-aos="fade-right" className="text-[25px] h1">
            WHY CHOOSE BFCS?
          </h1>
          <ul className="list flex flex-col gap-[15px] text-justify ">
            <li data-aos="fade-right">
              Proven Expertise: Benefit from our years of experience in
              providing exceptional cleaning services.
            </li>
            <li data-aos="fade-right">
              Eco-Friendly Approach: We prioritize environmentally conscious
              cleaning practices.
            </li>
            <li data-aos="fade-right">
              Competitive Pricing: Enjoy affordable rates and flexible payment
              options.
            </li>
            <li data-aos="fade-right">
              Professional Team: Our highly trained and vetted cleaners ensure
              quality results.
            </li>
            <li data-aos="fade-right">
              Comprehensive Services: From end-of-tenancy to party hosting, we
              offer a wide range of cleaning solutions.
            </li>
            <li data-aos="fade-right">
              Personalized Care: Our dedicated account managers provide
              personalized attention and support.
            </li>
            <li data-aos="fade-right">
              Expert Advice: Receive practical guidance on maintaining your home
              or workplace.
            </li>
            <li data-aos="fade-right">
              Industry Recognition: We're proud members of leading cleaning
              industry associations.
            </li>
            <li data-aos="fade-right">
              Referrals: Over 80% of our clients come to us through
              recommendations.
            </li>
          </ul>
        </div>
        <img data-aos="fade-left" src={img8} className="w-[40%] none" alt="" />
      </div>
    </div>
  );
};

export default About;
