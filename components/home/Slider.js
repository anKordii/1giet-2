import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";


var Hero = function(props) {
  const slideImages = [
    {
      avatar: "https://cdn.discordapp.com/attachments/1041443734216261632/1046481369892659280/Frame_1_2.png",
      name_en: '',
      description: '',
    },
    {
      avatar: "https://cdn.discordapp.com/attachments/1025802715068117092/1043610060816912394/Frame_1.png",
      name_en: '',
      description: '',
    },
    {
      avatar: "https://cdn.discordapp.com/attachments/1025802715068117092/1043610614402138123/Frame_1.png",
      name_en: 'Weed',
      description: 'Marihuana – susz pozyskiwany z roślin z rodzaju konopi, zawierający substancje psychoaktywne, stosowany głównie w celach rekreacyjnych i leczniczych. Do jej produkcji wykorzystuje się suszone i czasem sfermentowane żeńskie kwiatostany.',
    },
    {
      avatar: "https://cdn.discordapp.com/attachments/1025802715068117092/1043612096895651901/Frame_1.png",
      name_en: 'XANAX',
      description: 'Alprazolam – organiczny związek chemiczny, triazolowa pochodna benzo-1,4-diazepiny. Stosowany jako lek anksjolityczny, w szczególności w leczeniu zespołu lęku napadowego i zespole lęku uogólnionego.',
    },
    {
      avatar: "https://cdn.discordapp.com/attachments/1025802715068117092/1043612097197637662/Frame_1_1.png",
      name_en: 'Cocaine',
      description: 'Kokaina, metylobenzoiloekgonina – organiczny związek chemiczny z grupy alkaloidów o szkielecie tropanu, ester metylowy benzoiloekgoniny. Ma właściwości pobudzające. Jest pozyskiwana z liści krasnodrzewu pospolitego, który pierwotnie porastał tereny Andów w Ameryce Południowej.',
    }
  ];

  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slideImages.map((i, index)=> (
            <SwiperSlide key={index}>
              <div className="h-100 p-5 text-start slider-bg" style={{'backgroundImage': `url(${i.avatar})`}}>
                <div className="col-12 col-lg-5 p-sm-5 pt-5">
                  <h2 className="fw-bolder">{i.name_en}</h2>
                  <div className={`mt-4 d-none d-sm-block`}>
                    <p style={{color: 'var(--fight-bialy)'}}>{i.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </>);
}

export default Hero;
