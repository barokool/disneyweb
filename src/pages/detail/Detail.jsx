import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { render } from "@testing-library/react";

export default function Detail() {
  const { id } = useParams();

  const { movies, getVideo, moviesVideo } = useContext(Context);

  useEffect(() => {
    // const getData = () => {
    //   movies.map((movie,i) => {
    //     if (id == movie.id){
    //     }
    //   })

    // }

    getVideo(id);

    // const showVideo = () => {
    //   moviesVideo.map((video,i) => {
    //     if (video.official){
    //       console.log(video.key)
    //     }
    //   })
    // }
    // getData()
    // showVideo()
  }, [getVideo,id]);

  return (
    <Container>
      {movies.map(
        (movie, i) =>
          id == movie.id && (
            <div key={i}>
              <Bannermovie
                src={`http://image.tmdb.org/t/p/w500/${movies[i].backdrop_path}`}
                alt="img"
              />
              <MovieInfo>
                <img
                  src={`http://image.tmdb.org/t/p/w500/${movies[i].poster_path}`}
                  alt="poster"
                />
                <MoviesDesc>
                  <h4>{movies[i].title || movies[i].name} </h4>
                  <p>{movies[i].overview}</p>
                  <span>
                    Release Date :{" "}
                    {movies[i].release_date || movies[i].first_air_date}
                  </span>
                  <h3>Type : {movies[i].media_type} </h3>

                  {movies[i].adult ? <span>Adult </span> : ""}

                  <ContainerButton>
                    <ButtonWatch>Add to Watchlist</ButtonWatch>
                  </ContainerButton>
                </MoviesDesc>
              </MovieInfo>

              <ContainerVideo>
                {moviesVideo.map((video, i) =>
                  video.official ? (
                    <ReactPlayer
                      key={i}
                      url={`https://www.youtube.com/watch?v=${video.key}`}
                    />
                  ) : (
                    ""
                  )
                )}
              </ContainerVideo>
            </div>
          )
      )}
    </Container>
  );
}
const Container = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 400px;
`;

const ContainerVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Bannermovie = styled.img`
  width: 100%;
  height: 100%;
  max-height: 700px;
  object-fit: cover;
  object-position: center;
  padding: 0 5rem;
  filter: blur(3px);
  position: relative;
  opacity: 0.4;
`;

const MovieInfo = styled.div`
  position: absolute;
  padding: inherit;
  top: 20%;
  padding: 0 5rem;
  display: flex;
  gap: 3rem;
  img {
    width: 100%;
    max-width: 350px;
    height: 100%;
    max-height: 550px;
    margin: 0 1rem;
  }
`;

const MoviesDesc = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h4 {
    font-size: 30px;
    font-weight: 800;
  }

  p {
    font-size: 18px;
    letter-spacing: 2px;
    line-height: 30px;
  }

  span {
    font-size: 20px;
    letter-spacing: 2px;
  }
  h3 {
    letter-spacing: 2px;
    font-weight: 200;
    text-transform: uppercase;
  }
`;

const ButtonWatch = styled.button`
  appearance: none;
  background-color: #fcfcfc;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  max-width:300px;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;

&:disabled {
  pointer-events: none;
}

&:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

&:active {
  box-shadow: none;
  transform: translateY(0);
}
`;

const ContainerButton = styled.div`
  display: flex;
  gap: 1rem;
`;
