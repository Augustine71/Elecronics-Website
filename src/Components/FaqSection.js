import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const FaqSection = (props) => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (i) => {
    if (isOpen === i) {
      return setIsOpen(null);
    }
    setIsOpen(i);
  };

  return (
    <div class="faq__section">
      <div class="faq__content__header">
        <div class="faq__content__heading">Frequently Asked Questions</div>
      </div>
      <div class="faq__grid">
        <div class="faq__grid__item">
          {props.questions.map((faq, index) => (
            <div class="faq__accordion" key={index}>
              <div
                class={`faq__accordion__title ${props.prod_cat}`}
                onClick={() => toggleAccordion(index)}
              >
                <div>{faq.que}</div>
                <div>
                  {isOpen === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </div>

              {isOpen === index && (
                <div class="faq__accordion__content">
                  <p>{faq.ans}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
