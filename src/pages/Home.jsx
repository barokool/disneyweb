import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components'

import Reactslick from '../components/Reactslick';
import Viewers from '../components/Viewers';
import Movies from '../components/Movies';
import { Link } from 'react-router-dom';
import { Context } from '../context';
import Avatar from '../components/dropdown/Avatar';
export default function Home() {
  const {movies} = useContext(Context)
  console.log(movies)
  return <Container>

      <Reactslick/>
      <Viewers/>
      <Movies title={"Recommends for you"}/>
      <MoviesList>
      {
        movies.map((movie,i ) => (
          <Link to={"/detail/" + movie.id} key={i}>
            <img width={"400px"} src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster" />
          </Link>
        ))
      } 
      </MoviesList>
  </Container>;
}


const Container = styled.section`
background-image: url("https://prod-static.disney-plus.net/us-east-1/builds/0dbbdb5797cc274df6952863958f9afdbaa6cf27/node_modules/dss-junglebook/components/themes/images/background.png");
background-size: cover;
background-repeat: no-repeat;
height:100%;
padding : 2rem;
`

const MoviesList = styled.div`
  padding : 2rem 0;
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  gap:1rem;
  width:100%;
  height:100%;
  img {
    width:100%;
    max-width:200px;
    transition: 0.2s all ease-in;

    &:hover { 
      transition: 0.2s all ease-in;
      transform:scale(1.05);
      box-shadow: rgb(300 300 300 / 20%) 0px 26px 30px -10px,
      rgb(300 300 300 / 20%) 0px 16px 10px -10px;
    }
  }
`