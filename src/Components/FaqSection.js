import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export const FaqSection = () => {
  const accordions = [
    {
      title: "How can I get a new screw or sizing piece?",
      content:
        "Yes, 10% Niacinamide Serum is antioxidant which is highly effective against active acne as well as acne scars",
    },
    {
      title: "How can I get a new screw or sizing piece?",
      content:
        "Yes, 10% Niacinamide Serum is antioxidant which is highly effective against active acne as well as acne scars",
    },
    {
      title: "How can I get a new screw or sizing piece?",
      content:
        "Yes, 10% Niacinamide Serum is antioxidant which is highly effective against active acne as well as acne scars",
    },
  ];

  return (
    <div class="faq__section">
      <div class="faq__content__header">
        <div class="faq__content__heading">
          Screws &amp; Belt Repair Questions
        </div>
      </div>
      <div class="faq__grid">
        <div class="faq__grid__item">
          {accordions.map((accordion, index) => (
            <div class="faq__accordion" key={index}>
              <div class="faq__accordion__title">
                <div>{accordion.title}</div>
                <div>
                  <IoIosArrowDown />
                </div>
              </div>

              <div class="faq__accordion__content">
                <p>{accordion.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
