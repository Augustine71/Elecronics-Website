import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const FaqSection = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (i) => {
    if (isOpen === i) {
      return setIsOpen(null);
    }
    setIsOpen(i);
  };

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
        <div class="faq__content__heading">Frequently Asked Questions</div>
      </div>
      <div class="faq__grid">
        <div class="faq__grid__item">
          {accordions.map((accordion, index) => (
            <div class="faq__accordion" key={index}>
              <div
                class="faq__accordion__title"
                onClick={() => toggleAccordion(index)}
              >
                <div>{accordion.title}</div>
                <div>
                  {isOpen === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </div>

              {isOpen === index && (
                <div class="faq__accordion__content">
                  <p>{accordion.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
