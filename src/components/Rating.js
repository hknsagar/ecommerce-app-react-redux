import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

const Rating = ({ rating, onClick }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span key={index} style={{ cursor: "pointer" }} onClick={() => onClick(index + 1)}>
          {rating > index ? <BsStarFill /> : <BsStar />}
        </span>
      ))}
    </>
  );
};
export default Rating;
