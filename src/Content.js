import { Container,Paper, Typography} from "@mui/material";
import albums from "./illustration/undraw_posting_photo_re_plk8.svg";
import comments from "./illustration/undraw_reviews_lp8w.svg";
import photos from "./illustration/undraw_posting_photo_re_plk8.svg";
import posts from "./illustration/undraw_posts_re_ormv.svg";
import todos from "./illustration/undraw_to_do_re_jaef.svg";
import users from "./illustration/undraw_meet_the_team_re_4h08.svg"
import React from "react";
import {Link}  from "react-router-dom";


const Content = () => {

    return ( 
      <Container sx={
        {
            width:"100%",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            marginTop:"6rem",
            textTransform:"capitalize"
       
            
        }
      }>

    <Typography variant="h4" padding="1rem 0">Json Placeholder:React</Typography>

<Link to="/Albums" className="link">
        <Paper elevation={10}
        sx={
        {
            width:"300px",
            textAlign:"center",
            margin:"2rem 0",
            padding:"1rem 1rem",
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        }
      }>
<Typography variant="h5" sx={{display:"inline",textDecoration:"underline",padding:".8rem 0",textDecorationColor: "#55ACEE"}}>
    albums
</Typography>
<img src={albums} alt="" width="80%" />
<Typography variant="p" sx={{display:"inline",textDecoration:"underline",padding:".8rem 0",textDecorationColor: "#55ACEE"}}>
   check your memories
</Typography >
        </Paper>
</Link>
        <Link to={'/Comment'} className="link">
        <Paper elevation={10}
        sx={
        {
            width:"300px",
            textAlign:"center",
            margin:"2rem 0",
            padding:"1rem 1rem",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
        }
      }>
 
<Typography variant="h5" sx={{display:"inline",textDecoration:"underline",padding:".8rem 0",textDecorationColor: "#55ACEE"}}>
   comments
</Typography>
<img src={comments} alt="" width="80%" />
<Typography variant="p" sx={{display:"inline",textDecoration:"underline",padding:".8rem 0",textDecorationColor: "#55ACEE"}}>
   what do you think?
</Typography>

        </Paper>
        </Link>
        <Link to="/Photos" className="link">
        <Paper elevation={10}
        sx={
        {
            width:"300px",
            textAlign:"center",
            margin:"2rem 0",
            padding:"1rem 1rem",
            display:"flex",
            flexDirection:"column",
            alignItems:"center"

        }
      }>
<Typography variant="h5" sx={{display:"inline",textDecoration:"underline",padding:".8rem 0",textDecorationColor: "#55ACEE"}}>
 Photos
</Typography>
<img src={photos} alt="" width="80%" />
<Typography variant="p" sx={{display:"inline",textDecoration:"underline",padding:".8rem 0",textDecorationColor: "#55ACEE"}}>
 let's take more
</Typography>
        </Paper>
        </Link>

<Link to={'/Posts'} className="link">
        <Paper elevation={10}
        sx={
        {
            width:"300px",
            textAlign:"center",
            margin:"2rem 0",
            padding:"1rem 1rem",
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        }
      }>
<Typography variant="h5" sx={{display:"inline",textDecoration:"underline",padding:".8rem 0",textDecorationColor: "#55ACEE"}}>
   posts
</Typography>
 <img src={posts} alt="" width="80%"/>
 <Typography variant="p" sx={{display:"inline",textDecoration:"underline",padding:".8rem 0",textDecorationColor: "#55ACEE"}}>
writing clears the mind
</Typography>
        </Paper>
</Link>
<Link to ="/Todos" className="link">
        <Paper elevation={10}
        sx={
        {
            width:"300px",
            textAlign:"center",
            margin:"2rem 0",
            padding:"1rem 1rem",
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        }
      }>
<Typography variant="h5" sx={{display:"inline",textDecoration:"underline",padding:".8rem 0",textDecorationColor: "#55ACEE"}}>
   todos
</Typography>
<img src={todos} alt="" width="80%"/>
<Typography variant="p" sx={{display:"inline",textDecoration:"underline",padding:".8rem 0",textDecorationColor: "#55ACEE"}}>
   check your checklist
</Typography>
        </Paper>
</Link>

<Link to="/Users" className="link">

        <Paper elevation={10}
        sx={
        {
            width:"300px",
            textAlign:"center",
            margin:"2rem 0",
            padding:"1rem 1rem",
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        }
      }>

<Typography variant="h5" sx={{display:"inline",textDecoration:"underline",padding:".8rem 0",textDecorationColor: "#55ACEE" }}>
   users
</Typography>
<img src={users} alt="" width="80%" />
<Typography variant="p" sx={{display:"inline",textDecoration:"underline",padding:".8rem 0",textDecorationColor: "#55ACEE"}}>
 who's on the platform
</Typography>
        </Paper>
       
</Link>
      </Container> 
  
     );
}
 
export default Content;