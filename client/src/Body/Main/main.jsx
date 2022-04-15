import React from "react";
import Grid from '@mui/material/Grid';
import "./main.css"



const Main =() =>{
    return (
<div className="main-container">
           <Grid container spacing={2}>
  <Grid item xs={6}>
    <div className="main-heading">
  <h1 className="main-heading-text">
 HackByte LMS solutions for school and beyond.
  </h1>
  </div>
  </Grid>
  <Grid item xs={6}>
     <img src ="https://media.giphy.com/media/Jz7eUZut4DSl04bz2q/giphy.gif" className="main-image"/>
  </Grid>

</Grid>
        </div>
    )
}

export default Main;