import { ArrowRightOutlined } from "@ant-design/icons";
import logo from "../../assets/BFCS LOGO/BFCS LOGO.png";
import img7 from "../../assets/cleangadget.jpg";
import Cards from "../../Components/Cards";

const ClientReview = () => {
  return (
    <div>
      <div>
        <div className="bg-black absolute top-0 bg-opacity-45 h-[100vh] w-[100%] carouselBg">
          <div
            data-aos="fade-right"
            className=" flex flex-col gap-[20px] justify-center place-items-center mt-[150px] carouselItem"
          >
            <img src={logo} className="w-[10%]" alt="" />

            <h1 className="text-[70px] text-white font-extrabold">
              CLIENT REVIEW
            </h1>
            <p className="text-white text-justify w-[70%]">
              Cleaning is inevitable part of our life so we would like to invite
              you to use BFCS's cleaning services that make your life better! We
              would like to share with everyone who has read our website just
              few of the comments and opinions about our cleaning company and
              our professional cleaners made by clients who have previously used
              or still are using our variety of cleaning services.
            </p>
            <div className="flex gap-5 W-[100%]">
              <a
                href="/contactus"
                className="flex place-items-center btnMobile justify-between px-4 py-2  text-[15px] bg-[#005883] font-semibold text-white hover:scale-105 hover:text-white rounded-sm"
              >
                <p>CONTACT US</p>
                <ArrowRightOutlined style={{ fontSize: "15px" }} />
              </a>
              <a
                href="/tellafriend"
                className="flex place-items-center btnMobile justify-between px-4 py-2  text-[15px] bg-[#005883] font-semibold text-white hover:scale-105 hover:text-white rounded-sm"
              >
                <p>TELL A FRIEND</p>
                <ArrowRightOutlined style={{ fontSize: "15px" }} />
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={img7} className="w-screen h-[100vh]" alt="" />
        </div>
      </div>
      <div className="bg-[#ebebeb87] py-[30px]">
        <h1 className="text-[30px] text-center text-[#005883] font-bold h4">
          CLIENT REVIEWS ABOUT OUR PROFESSIONAL CLEANERS IN LONDON
        </h1>
        <h2 className="text-[25px] text-center text-[#005883] font-bold h2">
          {" "}
          DOMESTIC & COMMERCIAL CLEANING SERVICES
        </h2>
      </div>
      <div
        data-aos="fade-down"
        className="bg-[#ebebeb87] flex flex-col justify-center place-items-center px-[50px] py-[20px] gap-[20px] p20 w-[100%]"
      >
        <div className="w-[100%]">
          <h1 className="text-[25px] h1 text-start h3">WRITTEN TESTIMONIALS</h1>
        </div>
        <div className="w-[100%] px-[30px] flex flex-col gap-5 w100">
          <Cards
            cardContainer={
              " w-[100%] bg-white px-[30px] py-[10px] flex flex-col gap-3 rounded-2xl "
            }
            cardHeaderContainer={"flex justify-between place-items-center p-3"}
            name={"Adam Osburn"}
            content={
              "Comment: Good. I would expect staff to show ID at the door and be wearing some form of uniform Excellent. I was so pleased I came into your office the same day to tell you I was very very pleased with how the two cleaners had cleaned my Mother in law’s flat. The two cleaners were excellent. When I came into the your office to say how very very pleased I was with the results, I decided to arrange for a cleaner to come once a fortnight. I asked for a mature lady with clear English and was delighted that I got what I asked for and it will be the same lady each time. (Which is more than she gets from her care agency) Ivan was on time, very courteous and friendly. The work was carried out quickly, efficiently and to a high standard. An excellent spring clean. The cleaners arrived at 8am as arranged. We were very pleased with the way Mariya and her companion spring cleaned our home. They were very thorough and worked hard for the five hours they were with us and we wish to pass on our thanks to them."
            }
            cardContentContainer={"py-[10px]"}
          />
        </div>
        <div className="flex justify-between px-[50px] py-[20px] p10 gap-[30px] w-[100%] client">
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
            <div className="flex flex-col gap-5 w100">
              <div>
                {" "}
                <Cards
                  cardContainer={
                    " bg-white px-[30px] py-[10px] flex flex-col gap-3 rounded-2xl"
                  }
                  cardHeaderContainer={
                    "flex justify-between place-items-center p-3"
                  }
                  name={"Andrew Williams"}
                  content={
                    "I found the service good and excellent finish on my carpet. I thought it was money well spend."
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
                  name={"Silvia Rangoni"}
                  content={
                    "Cleaners arrived punctually, worked until the job was finished. Very thorough and very polite. All in all very happy with the service and would not hesitate to recommend to others or use again  in the future."
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
                  name={"Mina Nibari"}
                  content={
                    "I have had many cleaning companies do jobs for me, fantastic cleaners and many others. But I have decided that I have found the best one with these guys. The cleaners that came were so polite and professional and trust worthy, they cleaned everything and I didn’t need to keep telling them here or there they was just truly amazing. Finally found and reliable and affordable company. Although I’m paying for the service it just so nice to know it’s money well spent and they were such nice people you actually appreciate the service."
                  }
                  cardContentContainer={"py-[5px]"}
                />
              </div>
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
            <div className="flex flex-col gap-5 w100">
              <Cards
                cardContainer={
                  " bg-white px-[30px] py-[10px] flex flex-col gap-3 rounded-2xl "
                }
                cardHeaderContainer={
                  "flex justify-between place-items-center p-3"
                }
                name={"Ashley Pang, Head of Operations"}
                content={
                  "As one of London’s leading Airbnb management companies, Pass The Keys sees a great cleaning provider as a huge ingredient to our success, and we are so happy we are working with BFCS! Their cleaners are professional, knowledgeable and diligent and their customer service team are fantastic. Our guests are always happy with the cleaning quality when they check in and I highly recommend BFCS to both consumers and businesses."
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
                  name={"Ryan Chitty"}
                  content={
                    "Good afternoon,Just wanted to extend my thanks your helpful team who provided me with a 5 star service. Its refreshing to pick a company out of a hat and have no problems whatsoever! As I wasn’t around in person I was a bit nervous about paying for something I wasn’t going to see first hand, but I needn’t have worried at all! Thank you very much indeed! My tenants are delighted with the level of cleaning provided, despite them not being able to provide a mop and bucket for the team. Many thanks to so much to the team. I was very impressed with the initial service I received over the phone, and also with subsequent enquiries. I wouldn’t hesitate to recommend you to anyone needing a cleaning service, and I’ve advised my tenants to contact you about cleaning the flat at the end of their tenancy. Thanks again."
                  }
                  cardContentContainer={"py-[5px]"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
