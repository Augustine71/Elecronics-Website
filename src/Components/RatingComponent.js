import React, { useContext, useState, useEffect } from "react";
import { Rate } from "antd";
import { DummyRatings } from "./DummyRatings";
import { RatingReview } from "./RatingReview";

import { fs } from "../Config/Config";

import { ModalContext } from "./ModalContext";

export const RatingComponent = (props) => {
  const { toggleModalRating } = useContext(ModalContext);

  const [documents, setDocuments] = useState([]);

  const [visibleChildren, setVisibleChildren] = useState(3);

  const showMore = () => {
    setVisibleChildren((prevVisibleChildren) => prevVisibleChildren + 5);
  };

  useEffect(() => {
    const unsubscribe = fs
      .collection(props.prod_id)
      .onSnapshot((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setDocuments(data);
      });

    return unsubscribe;
  }, []);

  return (
    <div className="ratings__main-container">
      <h2 class="rating__header-component">Ratings &amp; Reviews</h2>
      <div>
        <div class="rating__styledReviewContainer">
          <div class="left">
            <div class="ratings__overview">
              <div class={`rating__container ${props.prod_cat}`}>
                <span class="number">4.4</span>
                <div class="rating__styledWrapper">
                  <Rate allowHalf defaultValue={4.5} disabled />
                </div>
              </div>
              <div class="rating__total-reviews">
                <span>1208 Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ratings__reviews-container">
        {documents.length > 0 ? (
          documents
            .slice(0, visibleChildren)
            .map((child, index) => <RatingReview data={child} key={index} />)
        ) : (
          <DummyRatings />
        )}
      </div>
      {visibleChildren < documents.length && (
        <div
          className={`ratings__write-a-review load-more ${props.prod_cat}`}
          onClick={showMore}
        >
          Load More
        </div>
      )}
      <div
        className={`ratings__write-a-review ${props.prod_cat}`}
        onClick={() => toggleModalRating(props.prod_id)}
      >
        Write a Review
      </div>
    </div>
  );
};
