import React from 'react';
import { useContext,useState} from 'react';
import { PhotosContext } from './PhotosContext';
import { Paper,Box } from '@mui/material';
import {IconButton,Container,Typography} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PhotosPagination from './PhotosPagination';
import EditIcon from '@mui/icons-material/Edit';
import AddPhotos from './AddPhotos';



export const PhotosPage = () => {
const [data] = useContext(PhotosContext);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data.slice(itemOffset, endOffset);
   
  
 

    return (
      <div className='photos'>
      <Typography variant='h4' sx={{
        textTransform:"capitalize",
        padding:"1rem 0",
        letterSpacing:"2px",
        wordSpacing:"2px",
        marginTop:"3rem"
      }}>photos</Typography>
     <AddPhotos/> 
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
  <h5>{datas.title}</h5>
  <img src={datas.thumbnailUrl} alt="" height="100%" width="90%"/>
  <Box sx={{  
    width:"100%",
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    padding:"1rem 1rem "}}>
  <IconButton>
  <EditIcon color='primary'/>
  </IconButton>
  <IconButton>

  <DeleteForeverIcon color='primary'/>
  </IconButton>
  </Box>
</Paper>
   ))
        }
 
        </Container>
        <PhotosPagination setItemOffset={setItemOffset} itemsPerPage={itemsPerPage} data={data}/>
  
        </div>
    );
}
