import React from 'react';
import { useState,useContext } from 'react';
import { TextField,Box,Modal,IconButton} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {AlbumContext} from "./AlbumContext";


const Create = () => {
const [open, setopen] = useState(false);
const [setData ] = useContext(AlbumContext);
const [Album, setAlbum] = useState([""]);



const handleSubmit = (e) => {
  e.preventDefault();
  setAlbum('');

  fetch("https://jsonplaceholder.typicode.com/albums",{
    method: "POST",
    headers: {"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
      title: Album,
      userId: 1
    }),
  }).then(()=> {
    setData(prevData => [...prevData,{title:Album}])

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
            Add New Album </label>
            <TextField variant='outlined' label="Albums" value={Album} onChange={(e) => setAlbum(e.target.value)}>
            </TextField> 
            <button>Create</button>
            </form>
            </Box>
            </Modal>
        </div>
    );
}

export default Create;
