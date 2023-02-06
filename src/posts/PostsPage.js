import React from 'react';
import { useContext,useState} from 'react';
import { PostsContext } from './PostsContext';
import { Paper,Box} from '@mui/material';
import {IconButton,Container,Typography} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {PostsPagination} from './PostsPagination';
import EditIcon from '@mui/icons-material/Edit';
import AddPosts from './AddPosts';




export const PostsPage = () => {
const [data] = useContext(PostsContext);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data.slice(itemOffset, endOffset);
   
  
 

    return (
<div className='posts'>
      <Typography variant='h4' sx={{
        textTransform:"capitalize",
        padding:"1rem 0",
        letterSpacing:"2px",
        wordSpacing:"2px",
        marginTop:"3rem"
      }}>posts</Typography>
<AddPosts/>
      
        <Container sx={{
            display:{
              xs: "flex",
              sm: "flex",
              md:"grid",
              lg: "grid",
              xl:"grid"
            },
            width:"100%",
            display:'flex',
            flexDirection:"column",
            alignItems:"center",
            marginTop:"5rem", 
            gridTemplateRows:"1fr 1fr",
        }}>
  {
   currentItems.map(datas => (
<Paper key={datas.id}  elevation={10} sx={{
    
  
}}>
    <p>{datas.id}</p>
  <h5>{datas.title}</h5>
  <p>{datas.body}</p>
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
        
        <PostsPagination setItemOffset={setItemOffset} itemsPerPage={itemsPerPage} data={data}/>
  
        </div>
    );
}
