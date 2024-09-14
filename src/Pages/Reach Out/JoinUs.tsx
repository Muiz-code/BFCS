import logo from "../../assets/BFCS LOGO/BFCS LOGO.png";
import img7 from "../../assets/JoinUs.jpg";
import TellaFriend from "../../Components/TellAFriend";

const JoinOurTeamForm = () => {
  return (
    <div>
      <div>
        <div className="bg-black absolute top-0 bg-opacity-45 h-[100vh] w-[100%] h50vh carouselBg">
          <div
            data-aos="fade-right"
            className=" flex flex-col gap-[20px] justify-center place-items-center mt-[250px] carouselItem"
          >
            <img src={logo} className="w-[10%]" alt="" />

            <h1 className="text-[70px] text-white font-extrabold">
              JOIN OUR TEAM
            </h1>
          </div>
        </div>
        <div>
          <img src={img7} className="w-screen h-[100vh] h50vh" alt="" />
        </div>
      </div>
      <div className="bg-[#ebebeb87] py-[30px]">
        <h1 className="text-[30px] text-center text-[#005883] font-bold h4">
          JOIN US
        </h1>
      </div>
      <div className="px-[5%] bg-[#ebebeb87]">
        <TellaFriend
          width="w-[100%] w100 "
          inputWidth="w-full"
          inputWidth1="py-4"
          radioStyle="flex flex-col gap-3"
          terms="I agree that BFCS can use my details to contact me in regards to my job application and my future work relationship with the company."
          heading="*Terms: Please note that your informations must be accurate"
          formFields={[
            {
              label: "Full Name",
              name: "fullName",
              placeholder: "Full Name",
              rules: [{ required: true }],
            },
            {
              label: "Email",
              name: "email",
              rules: [{ required: true }],
              placeholder: "Email",
            },
            {
              label: "Phone Number",
              name: "phoneNumber",
              placeholder: "Phone Number",
              rules: [{ required: true }],
            },
            {
              label: "Address",
              name: "address",
              placeholder: "Address",
              rules: [{ required: true }],
            },
            {
              label: "Message",
              name: "message",
              placeholder:
                "Tell us a little about you and your work experience?",
              rules: [{ required: true }],
              type: "textarea",
              rows: 4,
            },
            {
              label: "Message",
              name: "message",
              placeholder: "Why do you want to work with us?",
              rules: [{ required: true }],
              type: "textarea",
              rows: 4,
            },
            {
              label: "Message",
              name: "message",
              placeholder: "What do you think about your previous employer?",
              rules: [{ required: true }],
              type: "textarea",
              rows: 4,
            },
            {
              label: "Do you know what cleaning is?",
              name: "question1",
              type: "radio",
              options: ["Yes", "No"],
              rules: [{ required: true }],
            },
            {
              label: "Do you accept that the customer always has a priority?",
              name: "question2",
              type: "radio",
              options: ["Yes", "No"],
              rules: [{ required: true }],
            },
            {
              label: "Do you want to work as a cleaner?",
              name: "question3",
              type: "radio",
              options: ["Yes", "No"],
              rules: [{ required: true }],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default JoinOurTeamForm;
