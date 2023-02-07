import React from 'react';
import { useState,useContext } from 'react';
import { TextField,Box,Modal,IconButton} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {PhotosContext} from "./PhotosContext";


const AddPhotos= () => {
const [open, setopen] = useState(false);
const [setData ] = useContext(PhotosContext);
const [title, settitle] = useState([""]);
const [url, seturl] = useState([""]);



const handleSubmit = (e) => {
  e.preventDefault();
  settitle('');
  seturl("")

  fetch("https://jsonplaceholder.typicode.com/photos",{
    method: "POST",
    headers: {"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
      userId: 1,
      title: title,
      url:url
     
    }),
  }).then(()=> {
    setData(prevData => [...prevData,{title:title,url:url}])

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
            Add New Photos </label>
            <TextField variant='outlined' label="title" value={title} onChange={(e) => settitle(e.target.value)}>

            </TextField> 
            <TextField variant='outlined' label="url" value={url} onChange={(e) => seturl(e.target.value)}>

</TextField>
            <button>Create</button>
            </form>
            </Box>
            </Modal>
        </div>
    );
}

export default AddPhotos;
