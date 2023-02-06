import React from 'react';
import { useState,useContext } from 'react';
import { TextField,Box,Modal,IconButton} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {UsersContext} from "./UsersContext";


const AddUsers= () => {
const [open, setopen] = useState(false);
const [data,setData ] = useContext(UsersContext);
const [Name, setName] = useState([""]);
const [userName, setuserName] = useState([""]);
const [email, setemail] = useState([""]);
const [website, setwebsite] = useState([""]);



const handleSubmit = (e) => {
  e.preventDefault();
  setName('');
  setuserName("")
  setemail('');
  setwebsite("")


  fetch("https://jsonplaceholder.typicode.com/comments",{
    method: "POST",
    headers: {"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify({
      userId: 1,
      Name: Name,
      userName:userName,
      email:email,
      website:website
     
    }),
  }).then(()=> {
    setData(prevData => [...prevData,{
        Name:Name,
        userName:userName,
        email:email,
        website:website}])

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
            <TextField variant='outlined' label="name" value={Name} onChange={(e) => setName(e.target.value)}>

            </TextField> 
            <TextField variant='outlined' label="username" value={userName} onChange={(e) => setuserName(e.target.value)}>

</TextField>
<TextField variant='outlined' label="email" value={email} onChange={(e) => setemail(e.target.value)}>

</TextField>
<TextField variant='outlined' label="website" value={website} onChange={(e) => setwebsite(e.target.value)}>

</TextField>
            <button>Create</button>
            </form>
            </Box>
            </Modal>
        </div>
    );
}

export default AddUsers;
