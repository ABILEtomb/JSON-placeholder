import React from 'react';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import CommentIcon from '@mui/icons-material/Comment';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import PeopleIcon from '@mui/icons-material/People';
import { Typography, Drawer, Box} from '@mui/material';
import {Link}  from "react-router-dom";

const SideBar = ({openSlide,setopenSlide}) => {
if(openSlide){
    console.log('true')
}
    return (
        
  <Drawer variant='temporary'
  anchor="left" color="black" 
  open={openSlide} 
  onClose={()=> setopenSlide(false)}
  
  sx={{ width:{
      xs: "100%",
      sm: "100%",
      md: "90%",
      lg: "90%",
      xl: "90%"
    }}}>
  
  
  <Box sx={{ width:{
      xs: "100%",
      sm: "100%",
      md: "90%",
      lg: "90%",
      xl: "90%"
    }}} >


  <Typography variant="h5" textAlign='right' color="primary" 
   borderBottom ="1px solid #e0e0e0" textTransform= "uppercase" padding="1rem 5rem 1rem 0">
  r,r & j
  </Typography>
 
  <Link to="/Albums" className="link">
  <Typography
  sx={{
      display:"flex",
      flexDirection: "row",
      alignItems:"center",
      color:"black",
      borderBottom:"1px solid #e0e0e0",
      padding:"1.5rem 1rem",
      gap:"1.5rem"
  }}
    variant="h6" >
    
  <PhotoLibraryIcon color='primary'/>
  albums
  </Typography>
  </Link>
  <Link to={'/Comments'} className="link">
  <Typography  sx={{
       display:"flex",
      flexDirection: "row",
      alignItems:"center",
      color:"black",
      borderBottom:"1px solid #e0e0e0",
      padding:"1.5rem 1rem",
      gap:"1.5rem"
  }}
    variant="h6">
  <CommentIcon color='primary'/>
  comments
  </Typography>
  </Link>
  <Link to={'/Photos'} className="link">
  <Typography  sx={{
     display:"flex",
      flexDirection: "row",
      alignItems:"center",
      color:"black",
      borderBottom:"1px solid #e0e0e0",
      padding:"1.5rem 1rem",
      gap:"1.5rem"
  }}
    variant="h6">
  <PhotoSizeSelectActualIcon color='primary'/>
  photos
  </Typography>
  </Link>
  <Link to={'/Posts'} className="link">
  <Typography  sx={{
      display:"flex",
      flexDirection: "row",
      alignItems:"center",
      color:"black",
      borderBottom:"1px solid #e0e0e0",
      padding:"1.5rem 1rem",
      gap:"1.5rem"
  }}
    variant="h6" to="/Post" >
  <AllInboxIcon color='primary'/>
  posts
  </Typography>
  </Link>
  <Link to={'/Todos'} className="link">
  <Typography  sx={{
       display:"flex",
      flexDirection: "row",
      alignItems:"center",
      color:"black",
      borderBottom:"1px solid #e0e0e0",
      padding:"1.5rem 1rem",
      gap:"1.5rem"
  }}
    variant="h6">
  <PlaylistAddCheckIcon color='primary'/>
  todos
  </Typography>
  </Link>
  <Link to={'/Users'} className="link">
  <Typography  sx={{
      display:"flex",
      flexDirection: "row",
      alignItems:"center",
      color:"black",
      borderBottom:"1px solid #e0e0e0",
      padding:"1.5rem 1rem",
      gap:"1.5rem"
  }}
    variant="h6">
  <PeopleIcon color='primary'/>
  users
  </Typography>
  </Link>
  
  
  </Box>
  
          </Drawer>
    );
}

export default SideBar;
