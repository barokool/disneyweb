import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import Slider from 'react-slick'


export default function Reactslick() {
  const settings = { 
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (<Carousel {...settings}>
    <div>
      <img src="https://ss-images.saostar.vn/wp700/2018/12/05/4189323/ralph-breaks-the-internet-wreck-it-ralph-2-inside-the-disney_qrvj.jpg" alt="banner-logo"/>
    </div>
    <div>
    <img src="https://image.thanhnien.vn/w660/Uploaded/2022/abfluao/2021_09_09/a1_kxfl.png" alt="banner-logo"/>

    </div>
    <div>
    <img src="https://ss-images.saostar.vn/w800/2020/02/01/6912129/90215864-c907-49a0-93cd-766b4e498497.png" alt="banner-logo"/>

    </div>
    
  </Carousel>)
}

const Carousel = styled(Slider)`
  margin : 2rem;
  padding: 1rem;
  display:flex;
  & > button { 
    opacity : 0;
    width:100px;
    height:100px;
    transition : 0.2s all ease-in; 
    z-index : 1;
    
  

  }
  &  > button:hover { 
    opacity:1;
    transition : 0.5s all ease-in; 
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  
  &  img { 
    width: 100%;
    cursor: pointer;
    height:100%;
    max-height:450px;
    object-fit:cover;
  }
  & h1 { 
    color: #fff;
  }
  & img { 
    transition: 0.2s all ease-in;

  }
  & img:hover { 
    box-shadow: rgb(300 300 300 / 20%) 0px 26px 30px -10px,
      rgb(300 300 300 / 20%) 0px 16px 10px -10px;
      transition: 0.2s all ease-in;
  }
 
  
`