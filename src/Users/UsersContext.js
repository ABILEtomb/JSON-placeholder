import React from 'react';
import { useEffect,useState } from 'react';
import { createContext } from 'react';

export const UsersContext = createContext();

export const UsersProvider = (props) => {
    const [data, setdata] = useState([""]);
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {console.log(json); setdata(json) })
            .catch(err =>{console.log(err)
            });
          
           }, []);
            return (
           
                  <UsersContext.Provider value={[data,setdata]}>
                    {props.children}
                  </UsersContext.Provider>
            );
}
