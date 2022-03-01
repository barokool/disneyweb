import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import axios from 'axios';
export const Context = createContext()

export default function MoviesContext({children}) {
    
    const [user,setUser] = useState(null)
    const [movies,setMovies ] = useState([])
    const [moviesVideo, setMoviesVideo] = useState([])
    useEffect(() => { 
        onAuthStateChanged(auth, user => { 
            if (user){
              console.log(user)
              setUser(user)
            }
            else setUser(null)
        })
    },[])

      const getVideo = async(param) => { 
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param}/videos?api_key=9dc128cdcfc484fa2e49e9503be2974d&language=en-US`)
        setMoviesVideo(res.data.results)
        console.log(res.data.results)
      }

    useEffect(() => {
        const fetchAPI = async() => { 
          const res = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=9dc128cdcfc484fa2e49e9503be2974d")
          setMovies(res.data.results)
        }
        fetchAPI()
      },[])

    const store = {user,movies,getVideo,moviesVideo}

  return (
  <Context.Provider value={store}>
      {children}
  </Context.Provider>
  )
}
