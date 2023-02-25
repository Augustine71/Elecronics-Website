import React, { useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Rate } from "antd";

export const CustomerReviews = () => {
  const slideRef = useRef(null);

  const settings = {
    variableWidth: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="customers__main-container">
        <div className="customers__main-header">Customer Reviews</div>
        <div className="customers__sub-container">
          <div className="customers__box">
            <Slider {...settings} ref={slideRef}>
              <div className="customers_container">
                <div className="customers_together">
                  <img
                    src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703416/Croma%20Assets/Communication/Mobiles/Images/261991_hhfa33.png/mxw_600,s_jp2,s_videoimg,ns_atwebp,f_auto"
                    className="customers_prod-img"
                  />
                  <div className="customers_name">
                    Apple iPhone 14 Pro (128GB, Deep Purple)
                  </div>
                </div>

                <Rate allowHalf defaultValue={2.5} />
                <div className="customers_title">Very good product</div>
                <div className="customers_desc">
                  Hair loss woes are not uncommon. I was going through a
                  consistent hair loss problem and during the monsoon....it was
                  carnage!! Its been almost 20 days im consuming these gummies
                  on a 3 month supply. And voila, the results are so damn good.
                  The results were visible within 8 days of usage. From numerous
                  hair strands i could see falling in a day to just a negligible
                  figure in a week.
                </div>
                <div className="customers_person">
                  <div className="customers_person-name">Bhavin</div>
                  <div className="customers_person_img">
                    <img
                      src="https://ik.ourlittlejoys.com/mosaic-wellness/image/upload/v1629700121/staging/Home/Images/Group_2298.png"
                      alt="verified mark"
                    />
                  </div>
                </div>
              </div>
              <div className="customers_container">
                <div className="customers_together">
                  <img
                    src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703394/Croma%20Assets/Communication/Mobiles/Images/261991_8_kk810c.png/mxw_600,s_jp2,s_videoimg,ns_atwebp,f_auto"
                    className="customers_prod-img"
                  />
                  <div className="customers_name">
                    Apple iPhone 14 Pro (128GB, Deep Purple)
                  </div>
                </div>

                <Rate allowHalf defaultValue={2.5} />
                <div className="customers_title">Very good product</div>
                <div className="customers_desc">
                  Hair loss woes are not uncommon. I was going through a
                  consistent hair loss problem and during the monsoon....it was
                  carnage!! Its been almost 20 days im consuming these gummies
                  on a 3 month supply. And voila, the results are so damn good.
                  The results were visible within 8 days of usage. From numerous
                  hair strands i could see falling in a day to just a negligible
                  figure in a week.
                </div>
                <div className="customers_person">
                  <div className="customers_person-name">Bhavin</div>
                  <div className="customers_person_img">
                    <img
                      src="https://ik.ourlittlejoys.com/mosaic-wellness/image/upload/v1629700121/staging/Home/Images/Group_2298.png"
                      alt="verified mark"
                    />
                  </div>
                </div>
              </div>
              <div className="customers_container">
                <div className="customers_together">
                  <img
                    src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703400/Croma%20Assets/Communication/Mobiles/Images/261991_4_dp8elq.png/mxw_600,s_jp2,s_videoimg,ns_atwebp,f_auto"
                    className="customers_prod-img"
                  />
                  <div className="customers_name">
                    Apple iPhone 14 Pro (128GB, Deep Purple)
                  </div>
                </div>

                <Rate allowHalf defaultValue={2.5} />
                <div className="customers_title">Very good product</div>
                <div className="customers_desc">
                  Hair loss woes are not uncommon. I was going through a
                  consistent hair loss problem and during the monsoon....it was
                  carnage!! Its been almost 20 days im consuming these gummies
                  on a 3 month supply. And voila, the results are so damn good.
                  The results were visible within 8 days of usage. From numerous
                  hair strands i could see falling in a day to just a negligible
                  figure in a week.
                </div>
                <div className="customers_person">
                  <div className="customers_person-name">Bhavin</div>
                  <div className="customers_person_img">
                    <img
                      src="https://ik.ourlittlejoys.com/mosaic-wellness/image/upload/v1629700121/staging/Home/Images/Group_2298.png"
                      alt="verified mark"
                    />
                  </div>
                </div>
              </div>
              <div className="customers_container">
                <div className="customers_together">
                  <img
                    src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663177008/Croma%20Assets/Communication/Mobiles/Images/261991_2_o2tjlp.jpg/mxw_600,s_jp2,s_videoimg,ns_atwebp,f_auto"
                    className="customers_prod-img"
                  />
                  <div className="customers_name">
                    Apple iPhone 14 Pro (128GB, Deep Purple)
                  </div>
                </div>

                <Rate allowHalf defaultValue={2.5} />
                <div className="customers_title">Very good product</div>
                <div className="customers_desc">
                  Hair loss woes are not uncommon. I was going through a
                  consistent hair loss problem and during the monsoon....it was
                  carnage!! Its been almost 20 days im consuming these gummies
                  on a 3 month supply.
                </div>
                <div className="customers_person">
                  <div className="customers_person-name">Bhavin</div>
                  <div className="customers_person_img">
                    <img
                      src="https://ik.ourlittlejoys.com/mosaic-wellness/image/upload/v1629700121/staging/Home/Images/Group_2298.png"
                      alt="verified mark"
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
