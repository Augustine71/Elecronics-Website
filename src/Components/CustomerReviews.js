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
    slidesToShow: 3,
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

                <Rate allowHalf defaultValue={4} disabled />
                <div className="customers_title">A Game Changer</div>
                <div className="customers_desc">
                  I have been using this device for a few weeks now and it has
                  exceeded my expectations. The battery life is impressive and
                  the processing power is lightning fast. The display is also
                  crystal clear and makes streaming movies and videos a true
                  delight.
                </div>
                <div className="customers_person">
                  <div className="customers_person-name">Vivek</div>
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
                    src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664374836/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/263024_mcyrnq.png/mxw_2048,f_auto"
                    className="customers_prod-img"
                  />
                  <div className="customers_name">
                    boAt Airdopes 113 Wireless Gaming Earbuds
                  </div>
                </div>

                <Rate allowHalf defaultValue={4.5} disabled />
                <div className="customers_title">Worth Every Penny</div>
                <div className="customers_desc">
                  The new gadget is a great addition to my collection. It’s
                  sleek and stylish, and the performance is exceptional. The
                  battery life is impressive, and the screen is bright and
                  clear. It’s perfect for streaming movies and playing games.
                  The device is also lightweight, making it easy to carry
                  around. Overall, I’m very happy with my purchase.
                </div>
                <div className="customers_person">
                  <div className="customers_person-name">Rajesh</div>
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
                    src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1667853240/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/233723_0_wuj5kk.png/mxw_600,s_jp2,s_videoimg,ns_atwebp,f_auto"
                    className="customers_prod-img"
                  />
                  <div className="customers_name">
                    Lenovo Yoga Smart Tab Wi-Fi + 4G Android Tablet
                  </div>
                </div>

                <Rate allowHalf defaultValue={4.8} disabled />
                <div className="customers_title">Simplifying Life</div>
                <div className="customers_desc">
                  The latest electronic device is a game-changer. The graphics
                  are amazing, and the sound quality is top-notch. The user
                  interface is intuitive, and the device is incredibly fast.
                  It’s perfect for multitasking and can handle even the most
                  demanding applications. The battery life is also impressive,
                  and the device charges quickly. I highly recommend this
                  product to anyone looking for a high-end electronic device.
                </div>
                <div className="customers_person">
                  <div className="customers_person-name">Kavya</div>
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
                    src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664416536/Croma%20Assets/Computers%20Peripherals/Laptop/Images/257130_0_htx0fu.png/mxw_200,s_jp2,s_videoimg,ns_atwebp,f_auto"
                    className="customers_prod-img"
                  />
                  <div className="customers_name">
                    ASUS TUF Gaming A17 FA706IC-HX036W AMD Ryzen 7
                  </div>
                </div>

                <Rate allowHalf defaultValue={4.5} disabled />
                <div className="customers_title">Impressive Performance</div>
                <div className="customers_desc">
                  This device is perfect for gaming and multimedia. The graphics
                  are stunning and the processing power is lightning fast. I
                  also appreciate the spacious storage capacity, which allows me
                  to store all my games and media without worry.
                </div>
                <div className="customers_person">
                  <div className="customers_person-name">Sameer</div>
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
