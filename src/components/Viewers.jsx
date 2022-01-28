import React from "react";
import styled from "styled-components";
export default function Viewers() {
  return (
    <Container>
      <Wrap>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=600&aspectRatio=1.78&format=png"
          alt="lgo"
        />
        <video
          src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676714-pixar.mp4"
          autoPlay={true}
          type="video/mp4"
          loop={true}
          playsInline={true}
        ></video>
      </Wrap>

      <Wrap>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=600&aspectRatio=1.78&format=png"
          alt="lgo"
        />
        <video
          src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564674844-disney.mp4"
          autoPlay={true}
          type="video/mp4"
          loop={true}
          playsInline={true}
        ></video>
      </Wrap>
      <Wrap>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=600&aspectRatio=1.78&format=png"
          alt="lgo"
        />
        <video
          src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676115-marvel.mp4"
          autoPlay={true}
          type="video/mp4"
          loop={true}
          playsInline={true}
        ></video>
      </Wrap>
      <Wrap>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=600&aspectRatio=1.78&format=png"
          alt="lgo"
        />
        <video
          src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/12/17/1608229455-star-wars.mp4"
          autoPlay={true}
          type="video/mp4"
          loop={true}
          playsInline={true}
        ></video>
      </Wrap>
      <Wrap>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=600&aspectRatio=1.78&format=png"
          alt="lgo"
        />
        <video
          src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676296-national-geographic.mp4"
          autoPlay={true}
          type="video/mp4"
          loop={true}
          playsInline={true}
        ></video>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  margin: 2rem 1rem;
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 300px;
  overflow: hidden;
  position: relative;
  transition: 0.2s all ease-in;
  cursor: pointer;

  img {
    height: 100%;
    max-height: 200px;
    object-fit: cover;
    width: 100%;
    z-index:1;
  }
  video { 
      width:100%;
      height:100%;
      position:absolute;
        left:0px;
        opacity:0;
        border-radius:10px;
        transition : 0.2s all ease-in;

        &:hover { 
            transition : 0.2s all ease-in;
            opacity:1;
        }
    }
  &:hover {
    box-shadow: rgb(300 300 300 / 20%) 0px 26px 30px -10px,
      rgb(300 300 300 / 20%) 0px 16px 10px -10px;
    transition: 0.2s all ease-in;
    transform: scale(1.05)

  }
  @media (max-width: 768px) {
    max-width: 400px;
  }
`;
