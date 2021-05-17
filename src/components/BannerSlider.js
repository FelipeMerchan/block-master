import React from 'react'
import Slider from "react-slick"

import Banner from './Banner'

const BannerSlider = () => {
  const settings = {
    centerMode: true,
    centerPadding: '60px',
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    width: 166,
    arrows: false,
  };

  return (
    <section className="bannerSlider" aria-label="Slider">
      <Slider {...settings}>
        <Banner
          movieName="Mulán"
          imageMobile="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1621289886/block-master/mulan-cover-desktop_yjnnez.jpg"
          imageTablet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1621289886/block-master/mulan-cover-desktop_yjnnez.jpg"
          imageDesktop="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1621289886/block-master/mulan-cover-desktop_yjnnez.jpg"
        />
        <Banner
          movieName="Raya y el Último Dragón"
          imageMobile="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1621282369/block-master/raya-cover-desktop_moleog.jpg"
          imageTablet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1621282369/block-master/raya-cover-desktop_moleog.jpg"
          imageDesktop="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1621282369/block-master/raya-cover-desktop_moleog.jpg"
        />
        <Banner
          movieName="Unidos"
          imageMobile="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1621289886/block-master/unidos-cover-desktop_ai8ehn.png"
          imageTablet="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1621289886/block-master/unidos-cover-desktop_ai8ehn.png"
          imageDesktop="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1621289886/block-master/unidos-cover-desktop_ai8ehn.png"
        />
      </Slider>
    </section>
  )
}

export default BannerSlider
