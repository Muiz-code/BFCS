import CarouselSlide from "../../Components/CarouselSlide";
import img1 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP I.jpg";
import img2 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP II.jpg";
import img3 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP III.jpg";
import img4 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP IV.jpg";
import img5 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP V.jpg";
import img6 from "../../assets/BFCS POST TEMPLATE/BFCS POST TEMP VI.jpg";
import img7 from "../../assets/Spray.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="homeBg">
      <div>
        <CarouselSlide />
      </div>

      {/* WELCOME TO BFCS */}

      <div
        data-aos="zoom-in"
        className="flex flex-col p-[50px] justify-center place-items-center gap-[20px] font-family"
      >
        <h1 className="text-[30px] text-[#005883] font-bold">
          WELCOME TO BFCS
        </h1>
        <p className="w-[50%] text-[16px] flex flex-col gap-[20px] text-justify text-[#4a4a4a]">
          <span>
            BFCS is a premier cleaning company offering exceptional service and
            customer satisfaction. We provide top-quality commercial and
            domestic cleaning solutions.
          </span>
          <span>
            For homeowners, we offer flexible and efficient cleaning services
            tailored to your specific needs. Choose from one-off cleans, weekly,
            or fortnightly packages.
          </span>
          <span>
            Our commercial cleaning services cater to a wide range of
            businesses, including offices, schools, supermarkets, and cinemas.
            We guarantee a high standard of service and professionalism for
            every project.
          </span>
          <span>
            Whether you're seeking domestic or commercial cleaning, selecting
            BFCS means you'll receive expert services from one of the most
            trusted cleaning companies in the industry.
          </span>
        </p>
        <div className="flex gap-[15px]">
          <div data-aos="fade-right">
            <a
              href="#"
              className="flex place-items-center justify-between px-4 py-2 text-[15px] bg-[#005883] font-semibold text-white hover:scale-105 hover:text-white rounded-sm"
            >
              <p>BOOK ONLINE</p>
            </a>
          </div>
          <div data-aos="fade-left">
            <a
              href="#"
              className="flex place-items-center justify-between px-4 py-2  text-[15px] bg-[#005883] font-semibold text-white hover:scale-105 hover:text-white rounded-sm"
            >
              <p>CONTACT US</p>
            </a>
          </div>
        </div>
      </div>

      {/* ABOUT US */}

      <div
        data-aos="fade-down"
        className="bg-[#ebebeb87] flex flex-col justify-center place-items-center px-[50px] py-[20px] gap-[30px] w-[100%]"
      >
        <h1 className="text-[30px] text-[#005883] font-bold">ABOUT US</h1>
        <div className="flex flex-col gap-[40px]">
          <div className="flex gap-[50px] justify-center">
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
          <div className="flex gap-[50px] justify-center">
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
        <a
          href="#"
          className="flex place-items-center justify-center px-4 py-4 w-[15%] text-[15px] bg-[#005883] font-semibold text-white hover:scale-105 hover:text-white rounded-sm"
        >
          <p>ABOUT US</p>
        </a>
      </div>

      {/* WHY CHOOSE US */}
      <div className=" bg-white flex  justify-between place-items-center px-[100px] py-[40px] gap-[30px]">
        <div className="w-[50%] flex flex-col gap-[15px]">
          <h1 data-aos="fade-right" className="text-[25px]">
            WHY CHOOSE BFCS?
          </h1>
          <ul className="list flex flex-col gap-[15px] ">
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
        <img data-aos="fade-left" src={img7} className="w-[40%]" alt="" />
      </div>
    </div>
  );
};

export default Home;
