import React from 'react';
import { useState } from 'react';
import  Typography  from '@mui/material/Typography';
import { Container, AppBar,IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './SideBar';


function Navbar () {

    const [openSlide, setopenSlide] = useState(false);

  
    return ( 

        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            width:{
      xs: "100%",
      sm: "100%",
      md: "90%",
      lg: "90%",
      xl: "90%"
    }
        }} >
  <AppBar sx={
   {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'sticky',
     color: '#1a237e',
    width:{
      xs: "100%",
      sm: "100%",
      md: "90%",
      lg: "90%",
      xl: "90%"
    },
   padding: '1rem 2rem',
   
   }
  }>

<Typography variant ="h5" color="white" textTransform="upperCase">
r, r & j
</Typography>
<IconButton onClick={() => setopenSlide(true)}>
<MenuIcon/>
</IconButton>

  </AppBar>
<SideBar openSlide={openSlide} setopenSlide={setopenSlide}/>
 
</Container>









     );
}
 
export default Navbar ;