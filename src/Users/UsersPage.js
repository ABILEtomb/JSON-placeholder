import React from 'react';
import { useContext,useState} from 'react';
import { UsersContext } from './UsersContext';
import { Paper,Box } from '@mui/material';
import UsersPagination from './UsersPagination';
import {IconButton,Container,Typography} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddUsers from './AddUsers';

export const UsersPage = () => {
const [data] = useContext(UsersContext);
const [itemOffset, setItemOffset] = useState(0);
const itemsPerPage = 10;

const endOffset = itemOffset + itemsPerPage;
const currentItems = data.slice(itemOffset, endOffset);

    return (
<div className='users'>
      <Typography variant='h4' sx={{
        textTransform:"capitalize",
        padding:"1rem 0",
        letterSpacing:"2px",
        wordSpacing:"2px",
        marginTop:"3rem"
      }}>Users</Typography>
      <AddUsers/>
      
        <Container sx={{
           width:"100%",
           display:{
              xs: "flex",
              sm: "flex",
              md:"grid",
              lg: "grid",
              xl:"grid"
            },
            gridTemplateRows:"1fr 1fr",
            flexDirection:{
              xs: "column",
              sm: "column",
              md:"row"
            },
            alignItems:"center",
            marginTop:"5rem",
            justifyContent:"space-bewteen"
        }}>
        
        {
  currentItems.map(datas => (
<Paper  elevation={10} key={datas.id} sx={{
 width:
    {
      xs: "90%",
      sm: "300px",
      md: "300px",
      lg: "300px",
      xl: "300px"
    },
    margin: "1rem 0",
    display:"flex",
    flexDirection:'column',
    alignItems:"center",
    padding:"1rem 1rem",
    gap:"1rem",
    textAlign: "center"
}}>
    <p>{datas.id}</p>
  <h5>{datas.name}</h5>
  <h5>{datas.username}</h5>
  <h5>{datas.email}</h5>
  <h5>{datas.website}</h5>

  <Box sx={{  
    width:{
      xs: "90%",
      sm: "300px",
      md: "300px",
      lg: "300px",
      xl: "300px"
    },
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    padding:"1rem 1rem "}}>
  <IconButton>
  <EditIcon color='primary'/>
  </IconButton>
  <IconButton 
  ><DeleteForeverIcon color='primary'/>
  </IconButton>
</Box>
</Paper>
   ))
        }

       
        </Container>
        <UsersPagination setItemOffset={setItemOffset} itemsPerPage={itemsPerPage} data={data}/>
  

        </div>
    );
}
