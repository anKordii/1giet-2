import React from "react";
import Link from 'next/link';
import Image from 'next/image';

import cover from '../modules/cover.module.css';

var HomeContent = function({anime}) {
  
  return (
  <>
      <div className="container-fluid p-sm-5 p-3" style={{background: "rgb(10 10 10)"}}>
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="mb-3 text-center">
              <h1>Produkty</h1>
            </div>
            <div className={`position-relative ${cover.anime_list}`}>
              {anime && anime.map((i, index) => (
                <div className="position-relative swiper-slide" key={index} style={{zIndex: "5"}}>
                  <div>
                    <Link href={`/product/${i.slug}`}>
                      <a>
                        <div className={cover.image_box}>
                          <Image src={i.image} alt="cover" layout="responsive" loading="lazy" className={cover.cover_image} height="346.53px" width="240px"/>
                        </div>
                        <div className={cover.standing_box} dc="standing">
                          <div className="d-flex align-items-center">
                            <span style={{fontSize: "1rem"}}>{i.price},00 zł</span> 
                          </div>
                        </div>
                        <div className={cover.content_box}>
                          <h1 className={cover.cover_title}>{i.name}</h1>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  </>
  );
}

export default HomeContent;
