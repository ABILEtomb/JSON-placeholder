import React from 'react';
import { useContext,useState} from 'react';
import { TodosContext } from './TodosContext';
import { Paper,Box } from '@mui/material';
import TodosPagination from './TodosPagination';
import {IconButton,Container,Typography} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddTodos from './AddTodos';

export const TodosPage = () => {
const [data] = useContext(TodosContext);
const [itemOffset, setItemOffset] = useState(0);
const itemsPerPage = 10;

const endOffset = itemOffset + itemsPerPage;
const currentItems = data.slice(itemOffset, endOffset);

    return (
<div className='todos'>
      <Typography variant='h4' sx={{
        textTransform:"capitalize",
        padding:"1rem 0",
        letterSpacing:"2px",
        wordSpacing:"2px",
        marginTop:"3rem"
      }}>Todos</Typography>
      <AddTodos/>
      
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
<Paper key={datas.id} elevation={10} sx={{
    width:{
      xs: "90%",
      sm: "300px",
      md: "300px",
      lg: "300px",
      xl: "300px"
    },
    gridTemplateColumns:"1fr 1fr",
    margin: "1rem 0",
    flexDirection:'column',
    alignItems:"center",
    padding:"1rem 1rem",
    gap:"1rem",
    textAlign: "center"
}}>
    <p>{datas.id}</p>
  <h5>{datas.title}</h5>

  <Box sx={{  
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
        
        <TodosPagination setItemOffset={setItemOffset} itemsPerPage={itemsPerPage} data={data}/>
        </div>
   
    );
}
