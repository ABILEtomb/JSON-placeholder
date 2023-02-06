import React from 'react';
import {useState, useEffect} from 'react';
import { createContext } from 'react';


export const PostsContext = createContext();



export const PostsProvider = (props) => {
    
    const [data, setData] = useState([""]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json => {console.log(json)
            setData(json)
        })
        .catch(err => {
            console.log(err)
        })
      
       }, []);
    return (
        <PostsContext.Provider value={[data,setData]}>
        {props.children}
       </PostsContext.Provider>
    );
}

