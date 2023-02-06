import React from 'react';
import {useState, useEffect} from 'react';
import { createContext } from 'react';


export const PhotosContext = createContext();

export const PhotosProvider = (props) => {



    const [data, setData] = useState([""]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then(json => {console.log(json)
            setData(json)
        })
        .catch(err => {
            console.log(err)
        })
    }, [data]);

    


    return (
<PhotosContext.Provider value={[data,setData]}>
    {props.children}
   </PhotosContext.Provider>
    );
}