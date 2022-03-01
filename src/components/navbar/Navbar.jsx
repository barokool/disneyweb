import React, { useContext } from "react";
import styled from "styled-components";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { Context } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import Avatar from '../dropdown/Avatar'
export default function Navbar() {
  const { user } = useContext(Context);
  const navigate = useNavigate()
  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        navigate('/home')
        return;
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  };

  
  return (
    <Container>
      <LinkContainer>
      <Link to='/home'>
        <Logoimg
          src="https://disney-clone-d1e27.web.app/images/logo.svg"
          width={"100px"}
          alt="logo"
        />
      </Link>
      {user && (
        <>
        <Linkto href="/">
          <img
            src="https://disney-clone-d1e27.web.app/images/home-icon.svg"
            width={20}
            alt="icon"
          />
          <Span>Home</Span>
        </Linkto>
        <Linkto href="/404">
          <img
            src="https://disney-clone-d1e27.web.app/images/search-icon.svg"
            width={20}
            alt="icon"
          />
          <Span>Search</Span>
        </Linkto>
        <Linkto href="/404">
          <img
            src="https://disney-clone-d1e27.web.app/images/watchlist-icon.svg"
            width={20}
            alt="icon"
          />
          <Span>WatchList</Span>
        </Linkto>
        <Linkto href="/404">
          <img
            src="https://disney-clone-d1e27.web.app/images/original-icon.svg"
            width={20}
            alt="icon"
          />
          <Span>Originals</Span>
        </Linkto>
        <Linkto href="/404">
          <img
            src="https://disney-clone-d1e27.web.app/images/movie-icon.svg"
            width={20}
            alt="icon"
          />
          <Span>Movies</Span>
        </Linkto>
        <Linkto href="/404">
          <img
            src="https://disney-clone-d1e27.web.app/images/series-icon.svg"
            width={20}
            alt="icon"
          />
          <Span>Series</Span>
        </Linkto>
        </>
      )}
        
      </LinkContainer>
      
      {user ? (
        <LeftContainer>
          <Avatar />
        </LeftContainer>
      ) : (
        <Button onClick={handleLogin}>Login</Button>
      )}
    </Container>
  );
}

const Container = styled.div`
  background: #040714;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`


const Logoimg = styled.img`
  margin-right: 2rem;
`;

const UserLogo = styled(Logoimg)`
  border-radius : 50%;
  width:60px;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  
`;

const Button = styled.a`
  border: 1px solid #fff;
  padding: 6px 24px;
  border-radius: 4px;
  text-transform: uppercase;
  transition: all 0.5s ease;
  cursor : pointer;
  &:hover {
    background: #fff;
    color: #000;
  }
`;

const Linkto = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  @media only screen and (max-width: 1100px) {
    display:none;
}
`;

const Span = styled.span`
  position: relative;
  text-transform: uppercase;
  color: rgb(249, 249, 249);
  font-size: 13px;
  letter-spacing: 1.5px;
  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #fff;
    transform-origin: bottom left;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }
  &:hover::before {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
`;
