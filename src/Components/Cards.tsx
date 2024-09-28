import React, { useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";

interface cardDetails {
  cardContainer: string;
  cardHeaderContainer: string;
  name: string;
  content: string;
  cardContentContainer: string;
}

const Cards: React.FC<cardDetails> = ({
  cardContainer,
  cardHeaderContainer,
  name,
  content,
  cardContentContainer,
}) => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div data-aos="fade-right" className={` ${cardContainer}`}>
      <div className={`border-b-2 ${cardHeaderContainer}`}>
        <Avatar size={64} icon={<UserOutlined />} />
        <h2>{name}</h2>
      </div>
      <div className={` ${cardContentContainer} h3`}>
        <p className="text-justify">{content}</p>
      </div>
    </div>
  );
};

export default Cards;
