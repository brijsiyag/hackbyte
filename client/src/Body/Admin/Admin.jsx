import React from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import "./admin.css"
import Nav from "./Nav"



const Admin =() =>{
  document.title = "Admin";

    return (
      <>
      <Nav/>
<div className="main-container">
           <Grid container spacing={2}>
  <Grid item xs={6}>
    <div className="main-heading">
  <h1 className="main-heading-text">
 <span className="spanit">Hello</span> Admin
  </h1>
  </div>
 <Button variant="contained" size="large" className="admin-button">Add Question</Button>
 

  </Grid>
  <Grid item xs={6}>
     <img src ="https://media.giphy.com/media/Jz7eUZut4DSl04bz2q/giphy.gif" className="main-image"/>
  </Grid>

</Grid>
        </div>
        </>
    )
}

export default Admin;