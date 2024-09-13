import React from "react";
interface cardDetails {
  cardContainer: string;
  cardHeaderContainer: string;
  avatar: string;
  name: string;
  content: string;
  cardContentContainer: string;
}

const Cards: React.FC<cardDetails> = ({
  cardContainer,
  cardHeaderContainer,
  avatar,
  name,
  content,
  cardContentContainer,
}) => (
  <div className={` ${cardContainer}`}>
    <div className={`border-b-2 ${cardHeaderContainer}`}>
      <img src={avatar} alt="" />
      <h2>{name}</h2>
    </div>
    <div className={` ${cardContentContainer}`}>
      <p>{content}</p>
    </div>
  </div>
);

export default Cards;
