import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import axios from 'axios';

export const Context = createContext()

export default function MoviesContext({children}) {
    
    const [user,setUser] = useState(null)
    const [movies,setMovies ] = useState([])

    useEffect(() => { 
        onAuthStateChanged(auth, user => { 
            if (user)
                setUser(user)
            else setUser(null)
        })
    },[])

    useEffect(() => {
        const fetchAPI = async() => { 
          const res = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=9dc128cdcfc484fa2e49e9503be2974d")
          console.log(res.data.results)
          setMovies(res.data.results)
        }
        fetchAPI()
      },[])

    const store = {user,movies}

  return (
  <Context.Provider value={store}>
      {children}
  </Context.Provider>
  )
}
