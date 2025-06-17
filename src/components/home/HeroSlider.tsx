"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";
import sliderImg1 from "../../../public/assets/img/1.jpg";
import sliderImg2 from "../../../public/assets/img/2.jpg";
import sliderImg3 from "../../../public/assets/img/5.jpg";
import sliderImg4 from "../../../public/assets/img/4.jpg";
import useGlobalContext from "@/hooks/use-context";
const HeroSlider = () => {
  const { openLetterBox, setOpenLetterBox } = useGlobalContext();
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  const sliderData = [
    {
      id: 1,
      bgImg: sliderImg1,
      title: "Your Trusted Sourcing Partner for Advanced Energy Products",
      subTitle:
        "We are not just a sourcing agent — we are your trusted supply chain partner, helping you access reliable manufacturers, optimize solutions, and ensure smooth delivery from China to the world.",
    },
    {
      id: 2,
      bgImg: sliderImg2,
      title: "Sourcing Made Smarter in China's New Energy Industry",
      subTitle:
        "We provide sourcing and OEM/ODM support for clients who require specific brands or customized configurations.",
    },
    {
      id: 3,
      bgImg: sliderImg3,
      title:
        "Independent Sourcing Agent – Specialized in Energy Storage & Inverter Solutions",
      subTitle:
        "We help energy companies, system integrators, and distributors source the right products — at the right time, price, and quality — from China’s top-tier factories.",
    },
    {
      id: 4,
      bgImg: sliderImg4,
      title: "Professional Supplier Coordination on Behalf of Clients",
      subTitle:
        "We support your projects from supplier identification to final shipment, helping clients coordinate with trusted factories, manage production, ensure quality, and handle international logistics.",
    },
  ];

  return (
    <>
      <section className="slider-hero">
        <div className="slider-home-1 swiper-carousel swiper-theme">
          <Swiper
            modules={[Autoplay, Navigation]}
            onSlideChange={handleSlideChange}
            navigation={{
              nextEl: ".slide-next",
              prevEl: ".slide-prev",
            }}
            autoplay={{
              delay: 3000,
            }}
            loop={true}
          >
            {sliderData?.map((item, index) => {
              return (
                <SwiperSlide key={item.id}>
                  {index === activeIndex && (
                    <div
                      className="item hero-section"
                      style={{ backgroundImage: `url(${item?.bgImg?.src})` }}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="featured-area-one">
                              <h2>{item?.title}</h2>
                              <h6>{item?.subTitle}</h6>

                              <button
                                type="button"
                                onClick={() => setOpenLetterBox(!openLetterBox)}
                                className="button newsbox"
                              >
                                Request a Quote
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* arrow  */}
          <div className="slider-nav en-owl-btn disabled">
            <button type="button" role="presentation" className="slide-prev">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button type="button" role="presentation" className="slide-next">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="swiper-slider-dots disabled"></div>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
