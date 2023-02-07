import React from 'react';
import { useState,useContext } from 'react';
import { TextField,Box,Modal,IconButton} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {TodosContext} from "./TodosContext";


const AddTodos = () => {
const [open, setopen] = useState(false);
const [setData ] = useContext(TodosContext);
const [title, settitle] = useState([""]);


const handleSubmit = (e) => {
  e.preventDefault();
  settitle('');


  fetch("https://jsonplaceholder.typicode.com/comments",{
    method: "POST",
    headers: {"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
      userId: 1,
      title: Comment,
  
     
    }),
  }).then(()=> {
    setData(prevData => [...prevData,{title:title}])

  }).catch(err =>{
      console.log(err)
  })

setopen(false)
}


    return (
        <div>
    <IconButton  onClick={()=>setopen(true)} >
<AddBoxIcon color='primary'/>
        </IconButton> 
        <Modal onClose={()=> setopen(false)} open={open}
        sx={{
          display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
        }}>
      <Box sx={{
        width:"400px",
        backgroundColor:'white',
        padding:"3rem 2rem",
      }}>
            <form onSubmit={handleSubmit} >
            <label htmlFor="" >
            Add New Todos </label>
            <TextField variant='outlined' label="todos" value={title} onChange={(e) => settitle(e.target.value)}>

            </TextField> 
            <button>Create</button>
            </form>
            </Box>
            </Modal>
        </div>
    );
}

export default AddTodos;
