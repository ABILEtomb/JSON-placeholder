import React from 'react';
import { useState,useContext } from 'react';
import { TextField,Box,Modal,IconButton} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {PostsContext} from "./PostsContext";


const AddPosts= () => {
const [open, setopen] = useState(false);
const [data,setData ] = useContext(PostsContext);
const [title, settitle] = useState([""]);
const [body, setbody] = useState([""]);



const handleSubmit = (e) => {
  e.preventDefault();
  settitle('');
  setbody("")

  fetch("https://jsonplaceholder.typicode.com/comments",{
    method: "POST",
    headers: {"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
      userId: 1,
      title: title,
      body:body
     
    }),
  }).then(()=> {
    setData(prevData => [...prevData,{title:title,body:body}])

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
            Add New Posts </label>
            <TextField variant='outlined' label="title" value={title} onChange={(e) => settitle(e.target.value)}>

            </TextField> 
            <TextField variant='multiline' label="body" value={body} onChange={(e) => setbody(e.target.value)}>

</TextField>
            <button>Create</button>
            </form>
            </Box>
            </Modal>
        </div>
    );
}

export default AddPosts;
