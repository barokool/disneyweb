import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../context';
import styled from 'styled-components'



export default function Detail() {
  const {id} = useParams()
  const [data,setData] = useState({})

  const {movies} = useContext(Context)

  useEffect(() => { 
    const getData = () => {
      movies.map((movie,i) => {
        if (id == movie.id){
          console.log(movies[i])
        }
      })
      
    }
    getData()
  },[])

  return (<Container>
      {
        movies.map((movie,i) => (
          (id==movie.id) && (
            <div key={i}>
              <Bannermovie src={`http://image.tmdb.org/t/p/w500/${movies[i].backdrop_path}`} alt="img" />
              <MovieInfo>
                <img src={`http://image.tmdb.org/t/p/w500/${movies[i].poster_path}`} alt="poster" />
                <MoviesDesc>
                <h4>{movies[i].title || movies[i].name} </h4>
                <p>{movies[i].overview}</p>
                <span>Release Date : {movies[i].release_date || movies[i].first_air_date}</span>
                <h3>Type : {movies[i].media_type} </h3>
                </MoviesDesc>

              </MovieInfo>

            </div>
          ) 
        ))
      }

  </Container>)
}
const Container = styled.section`
  width:100%;
  height:100vh;
  max-height:400px;

`


const Bannermovie = styled.img`
  width:100%;
  height:100%;
  max-height:700px;
  object-fit:cover;
  object-position:center;
  padding:0 5rem;
  filter:blur(3px);
  position:relative;
  opacity:0.4;
`

const MovieInfo= styled.div`
  position:absolute;
  padding:inherit;
  top : 20%;
  padding: 0 5rem;
  display:flex;
  gap: 3rem;
  img { 
    width:100%;
    max-width:350px;
    height:100%;
    max-height:550px;
    margin: 0 1rem;
  }

`

const MoviesDesc = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  gap: 1rem;
  h4 { 
    font-size:30px;
    font-weight:800;
  }

  p { 
    font-size:18px;
    letter-spacing:2px;
    line-height: 30px;
  }
  
  span { 
    font-size:20px;
    letter-spacing:2px;
  }
  h3 { 
    letter-spacing:2px;
    font-weight:200;
    text-transform:uppercase;
  }
`