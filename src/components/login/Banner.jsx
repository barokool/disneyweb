import React from "react";
import styled from "styled-components";
export default function Banner() {
  return (
    <Container>
      <Content>
        <ContainerMini>
          <Image
            src="https://disney-clone-d1e27.web.app/images/cta-logo-one.svg"
            alt="brand"
          />
          <Button>Get all there</Button>
          <Para>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1
          </Para>
          <Image
            src="https://disney-clone-d1e27.web.app/images/cta-logo-two.png"
            alt="brand"
          />
        </ContainerMini>
      </Content>
    </Container>
  );
}

const Container = styled.section`
overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  background-image: url("https://disney-clone-d1e27.web.app/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  padding: 80px 40px;
  
`;

const ContainerMini = styled.div`
  width: 100%;
  max-width: 650px;
  gap : 0.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom : 10vw;
`;
const Image = styled.img`
  width: 100%;
  max-width: 650px;
`;

const Button = styled.a`
  background-color: rgb(0, 99, 229);
  border: none;
  color: #fff;
  font-weight: 900;
  font-size: 20px;
  border-radius: 4px;
  width: 100%;
  text-align: center;
  padding: 15px 0;
  cursor : pointer;
  &:hover { 
    background-color: #0483ee;
  }
`;


const Para = styled.p`
color: hsla(0, 0%, 95.3%, 1);
font-size: 11px;
margin: 12px 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`