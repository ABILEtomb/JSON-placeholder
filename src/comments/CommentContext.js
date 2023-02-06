import React from 'react';
import { useEffect,useState } from 'react';
import { createContext } from 'react';

export const CommentContext = createContext();

export const CommentProvider = (props) => {
  const [data, setdata] = useState([""]);

   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((json) => {console.log(json); setdata(json) })
    .catch(err =>{console.log(err)
    });
  
   }, []);
    return (
   
          <CommentContext.Provider value={[data,setdata]}>
            {props.children}
          </CommentContext.Provider>
    );
}


