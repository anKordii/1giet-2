import React, { useRef } from "react";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";

import cover from '../modules/cover.module.css';

import 'swiper/css';
import "swiper/css/navigation";

var HomeContent = function({anime}) {
  const swiperRef = useRef(null);
  
  return (
  <>
      <div className="container-fluid p-sm-5 p-3" style={{background: "var(--docchi-bg-2)"}}>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="mb-3 text-center">
              <h1>Ostatnie zamówienia</h1>
            </div>
          </div>
          <div className="col-12 col-md-12 col-sm-12 col-lg-10" onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()} onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}>
            <Swiper
              ref={swiperRef}
              slidesPerView={7}
              breakpoints={{
                320: {
                  slidesPerView: 3,
                },
                480: {
                  slidesPerView: 3,
                },
                640: {
                  slidesPerView: 5,
                },
                1000: {
                  slidesPerView: 7
                }
              }}
              resistanceRatio={0.1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              centeredSlides={true}
              spaceBetween={10}
              loop={true}
              navigation={true}
              modules={[Autoplay, Navigation]}
            >
              {anime && anime.map((i, index) => (
                <SwiperSlide key={index}>
                  <div className="" key={index}>
                    <div>
                        <div className={cover.image_box}>
                            <Image src={i.image || "https://cdn.discordapp.com/attachments/721911008213598238/1045402498791391262/Rectangle_1.png"} alt="cover" layout="responsive" loading="lazy" className={cover.cover_image} height="346.53px" width="240px"/>
                        </div>
                        <div className={cover.standing_box} dc="standing">
                            <div className="d-flex align-items-center">
                                <span style={{fontSize: "1rem"}}>x{i.amount}</span> 
                            </div>
                        </div>
                        <div className={cover.content_box}>
                            <h1 className={cover.cover_title}>{i.product}</h1>
                            <p className="p-0 m-0">{i.buyer.replace(/\b(\w{2})\w+(\w)\b/g, '$1**$2')}</p>
                        </div>
                    </div>
                  </div>
                </SwiperSlide>
                ))}
              </Swiper>
          </div>
        </div>
    </div>
  </>
  );
}

export default HomeContent;
