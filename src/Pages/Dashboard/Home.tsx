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
import Cards from "../../Components/Cards";
import { Button } from "antd";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className="w-screen">
      <div>
        <CarouselSlide />
      </div>

      {/* WELCOME TO BFCS */}

      <div
        data-aos="zoom-in"
        className="flex flex-col p-[50px] justify-center place-items-center gap-[20px] font-family  p20"
      >
        <h1 className="text-[30px] text-[#005883] font-bold h1">
          WELCOME TO BFCS
        </h1>
        <p className="w-[50%] text-[16px] flex flex-col gap-[20px] text-justify text-[#4a4a4a] w100 h3">
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
              href="/contactUs"
              className="flex place-items-center justify-between px-4 py-2 text-[15px] btnMobileW bg-[#005883] font-semibold text-white hover:scale-105 hover:text-white rounded-sm"
            >
              <p>BOOK ONLINE</p>
            </a>
          </div>
          <div data-aos="fade-left">
            <a
              href="/contactUs"
              className="flex place-items-center justify-between px-4 py-2 btnMobileW text-[15px] bg-[#005883] font-semibold text-white hover:scale-105 hover:text-white rounded-sm"
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
        <h1 className="text-[30px] text-[#005883] font-bold h1">ABOUT US</h1>
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
        <a
          href="/aboutUs"
          className="flex place-items-center justify-center px-4 py-4 w-[15%] text-[15px] bg-[#005883] font-semibold text-white hover:scale-105 hover:text-white rounded-sm btnMobileW"
        >
          <p>ABOUT US</p>
        </a>
      </div>

      {/* WHY CHOOSE US */}
      <div className=" bg-white flex  justify-between place-items-center px-[100px] py-[40px] p20 gap-[30px]">
        <div className="w-[50%] flex flex-col gap-[15px] w100 WCU">
          <h1 data-aos="fade-right" className="text-[25px] h1">
            WHY CHOOSE BFCS?
          </h1>
          <ul className="list flex flex-col gap-[15px] text-justify h3">
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
        <img data-aos="fade-left" src={img7} className="w-[40%] none" alt="" />
      </div>

      {/* Client review */}
      <div
        data-aos="fade-down"
        className="bg-[#ebebeb87] flex flex-col justify-center place-items-center px-[50px] py-[20px] gap-[30px] p20 w-[100%]"
      >
        <h1 className="text-[30px] text-[#005883] font-bold h1">
          CLIENT REVIEW
        </h1>
        <div className="flex justify-between place-items-center px-[100px] py-[40px] p10 gap-[30px] w-[100%] client">
          <div className="w-[50%] flex flex-col gap-5 w100">
            <Cards
              cardContainer={
                " bg-white px-[30px] py-[10px] flex flex-col gap-3 rounded-2xl "
              }
              cardHeaderContainer={
                "flex justify-between place-items-center p-3"
              }
              name={"Marilyn Bolger"}
              content={
                "Good. I wold expect staff to show ID at the door and be wearing some form of uniformExcellent. I was so pleased I came into your office the same day to tell you I was very very pleased with how the two cleaners had cleaned my Mother in law’s flat. The two cleaners were excellent. When I came into the your office to say how very very pleased I was with the results, I decided to arrange for a cleaner to come once a fortnight. I asked for a mature lady with clear English and was delighted that I got what I asked for and it will be the same lady each time. (Which is more than she gets from her care agency) You guys wer on time, very courteous and friendly. The work was carried out quickly, efficiently and to a high standard.An excellent spring clean. The cleaners arrived at 8am as arranged. We were very pleased with the way Mariya and her companion spring cleaned our home. They were very thorough and worked hard for the five hours they were with us and we wish to pass on our thanks to them."
              }
              cardContentContainer={"py-[5px]"}
            />
            <div>
              {" "}
              <Cards
                cardContainer={
                  " bg-white px-[30px] py-[10px] flex flex-col gap-3 rounded-2xl"
                }
                cardHeaderContainer={
                  "flex justify-between place-items-center p-3"
                }
                name={"Oriva Kim"}
                content={
                  "Absolutely fantastic service by friendly hard-working cleaner, left my double oven scrupulously clean and looking like brand new."
                }
                cardContentContainer={"py-[5px]"}
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 w-[50%] w100">
            <div>
              {" "}
              <Cards
                cardContainer={
                  " bg-white px-[30px] py-[10px] flex flex-col gap-3 rounded-2xl"
                }
                cardHeaderContainer={
                  "flex justify-between place-items-center p-3"
                }
                name={"Jackie Bywaters"}
                content={
                  "Very Very Good service. The cleaner was a very nice lady and did a really great job."
                }
                cardContentContainer={"py-[5px]"}
              />
            </div>
            <div>
              {" "}
              <Cards
                cardContainer={
                  " bg-white px-[30px] py-[10px] flex flex-col gap-3 rounded-2xl"
                }
                cardHeaderContainer={
                  "flex justify-between place-items-center p-3"
                }
                name={"Nina Gupta"}
                content={
                  "Arrived punctually, very efficient, hard working and did an excellent clean. Highly recommend."
                }
                cardContentContainer={"py-[5px]"}
              />
            </div>
            <div>
              {" "}
              <Cards
                cardContainer={
                  " bg-white px-[30px] py-[10px] flex flex-col gap-3 rounded-2xl"
                }
                cardHeaderContainer={
                  "flex justify-between place-items-center p-3"
                }
                name={"Amanda Gray"}
                content={
                  "I was very happy with the service you provided. I will definitely use you again. The cleaner did a great job. I would give 10 out of 10 for the standard of cleaning.The carpets have settled down well and have regained the flatness back which is great news. They do also look much cleaner and sharper so I am very pleased with the job. I will now discuss with our Property Manager as to other areas and buildings we may wish to address and I will be in touch to discuss. Many thanks for the great service provided thus far.Sorry Peter, I should have said – the clubhouse looked great, many thanks to the team!"
                }
                cardContentContainer={"py-[5px]"}
              />
            </div>
          </div>
        </div>
        <a
          href="/clientreview"
          className="flex w-[100%] place-items-center justify-center"
        >
          <Button
            size="large"
            className="w-[30%] bg-[#005883] text-white h-[7vh] rounded-none"
          >
            SEE MORE REVIEWS
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Home;
