import React from 'react';
import { useContext,useState} from 'react';
import { CommentContext } from './CommentContext';
import { Paper,Box, Typography } from '@mui/material';
import CommentPagination from './CommentPagination';
import {IconButton,Container} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddCommment from './AddComment';

export const CommentPage = () => {
const [data] = useContext(CommentContext);
const [itemOffset, setItemOffset] = useState(0);
const itemsPerPage = 10;

const endOffset = itemOffset + itemsPerPage;
const currentItems = data.slice(itemOffset, endOffset);

    return (
<div className='comments'>
      <Typography variant='h4' sx={{
        textTransform:"capitalize",
        padding:"1rem 0",
        letterSpacing:"2px",
        wordSpacing:"2px",
        marginTop:"3rem"
      }}>comments</Typography>
      <AddCommment/>
      
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
<Paper key={datas.id}  elevation={10} sx={{
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
    textAlign:"center"
}}>
    <p>{datas.id}</p>
  <h5>{datas.name}</h5>
  <h5>{datas.email}</h5>
  <p>{datas.body}</p>

  <Box sx={{ 
    width:"100%", 
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
        
        <CommentPagination setItemOffset={setItemOffset} itemsPerPage={itemsPerPage} data={data}/>
  

        </div>
    );
}

