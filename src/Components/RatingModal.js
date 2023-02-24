import React, { useState, useEffect, useContext } from "react";
import { ModalContext } from "./ModalContext";
import { Rate } from "antd";
import { AiFillCloseCircle } from "react-icons/ai";

export const RatingModal = () => {
  const { ratingModalIsOpen, toggleModalRating } = useContext(ModalContext);

  const [formValues, setFormValues] = useState({
    email: "",
    name: "",
    title: "",
    desc: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handleNameChange = (e) => {
    setFormValues({ ...formValues, name: e.target.value });
  };

  const handleTitleChange = (e) => {
    setFormValues({ ...formValues, title: e.target.value });
  };

  const handleDescChange = (e) => {
    setFormValues({ ...formValues, desc: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.title) {
      errors.title = "Review Title is required";
    }
    if (!values.desc) {
      errors.desc = "Review Description is required";
    }
    return errors;
  };

  return (
    <div
      className="ratings__modal"
      onClick={toggleModalRating}
      style={{ display: ratingModalIsOpen ? "flex" : "none" }}
    >
      <div
        className="ratings__modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ratings__modal-cls">
          <AiFillCloseCircle
            size={35}
            color="red"
            onClick={toggleModalRating}
          />
        </div>
        <div class="ratings__writeReviewstyles">
          <form class="write-review__form" onSubmit={handleSubmit}>
            <div class="ratings__Inputstyles">
              <label class="input-label" for="rating">
                Rate this Product
              </label>
              <div class="stars-wrap">
                <Rate allowClear={false} defaultValue={1} />
              </div>
            </div>
            <div class="ratings__input-section">
              <div class="input-section">
                <label class="input-label" for="write-review-name">
                  Name
                </label>
                <input
                  class="input-box"
                  type="text"
                  value={formValues.name}
                  onChange={handleNameChange}
                  id="write-review-name"
                  placeholder="Your Name"
                  name="name"
                />
                {formErrors.name ? (
                  <div className="signUp__error-message">{formErrors.name}</div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div class="ratings__input-section">
              <div class="input-section">
                <label class="input-label" for="write-review-email">
                  Email
                </label>
                <input
                  class="input-box "
                  value={formValues.email}
                  onChange={handleEmailChange}
                  id="write-review-email"
                  placeholder="Your Email"
                  name="email"
                />
                {formErrors.email ? (
                  <div className="signUp__error-message">
                    {formErrors.email}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div class="ratings__input-section">
              <div class="input-section">
                <label class="input-label" for="write-review-title">
                  Review Title
                </label>
                <input
                  class="input-box "
                  type="text"
                  value={formValues.title}
                  onChange={handleTitleChange}
                  id="write-review-title"
                  placeholder="Type title here..."
                  name="reviewTitle"
                />
                {formErrors.title ? (
                  <div className="signUp__error-message">
                    {formErrors.title}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div class="ratings__input-section">
              <div class="input-section">
                <label class="input-label" for="write-review-description">
                  Review Description
                </label>
                <textarea
                  class="input-box "
                  id="write-review-description"
                  placeholder="Type detailed review here..."
                  value={formValues.desc}
                  onChange={handleDescChange}
                  name="reviewDescription"
                  rows="4"
                ></textarea>
                {formErrors.desc ? (
                  <div className="signUp__error-message">{formErrors.desc}</div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div class="ratings__buttons">
              <button type="button" class="ratings__cancel-btn">
                Cancel
              </button>
              <button
                type="submit"
                data-disabled="true"
                class="ratings__save-btn"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
