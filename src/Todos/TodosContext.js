import React from 'react';
import { useEffect,useState } from 'react';
import { createContext } from 'react';


export const TodosContext = createContext();



export const TodosProvider = (props) => {
    const [data, setdata] = useState([""]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then((json) => {console.log(json);
             setdata(json) })
        .catch(err =>{console.log(err)
        });
      
       }, []);
        return (
       
              <TodosContext.Provider value={[data,setdata]}>
                {props.children}
              </TodosContext.Provider>
        );
}


