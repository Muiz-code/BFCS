import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
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
}) => (
  <div className={` ${cardContainer}`}>
    <div className={`border-b-2 ${cardHeaderContainer}`}>
      <Avatar size={64} icon={<UserOutlined />} />
      <h2>{name}</h2>
    </div>
    <div className={` ${cardContentContainer}`}>
      <p className="text-justify">{content}</p>
    </div>
  </div>
);

export default Cards;
