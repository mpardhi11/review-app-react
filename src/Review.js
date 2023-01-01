import React, { useState, Fragment } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
console.log(people);

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const commonFun = (name) => {
    switch (name) {
      case "prev":
        setIndex((prevIndex) => {
          return prevIndex === 0
            ? (prevIndex = people.length - 1)
            : prevIndex - 1;
        });
        break;
      case "next":
        setIndex((prevIndex) => {
          return prevIndex === people.length - 1
            ? (prevIndex = 0)
            : prevIndex + 1;
        });
        break;
      case "random":
        setIndex(Math.floor(Math.random() * people.length));
        break;
      default:
        setIndex(0);
        break;
    }
  };
  return (
    <Fragment>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button
            className="prev-btn"
            onClick={() => {
              commonFun("prev");
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            className="prev-btn"
            onClick={() => {
              commonFun("next");
            }}
          >
            <FaChevronRight />
          </button>
        </div>
        <button
          className="prev-btn"
          onClick={() => {
            commonFun("random");
          }}
        >
          {/* {" "} */}
          Surprise Me
        </button>
      </article>
    </Fragment>
  );
};

export default Review;
