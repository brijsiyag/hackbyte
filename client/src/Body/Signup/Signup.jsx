import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "../Login/login.css"
import FormControl from '@mui/material/FormControl';
import Axios from "axios";
import { useNavigate } from "react-router-dom";


Axios.defaults.withCredentials = true;

const theme = createTheme();

export default function SignUp() {
    const navigate = useNavigate();
  document.title = "Signup";

    const [batch, setbatch] = React.useState("2020");

  const batchChangeHandler = (event) => {
    setbatch(event.target.value);
  };

      const [branch, setbranch] = React.useState("Cse");

  const branchChangeHandler = (event) => {
    setbranch(event.target.value);
  };

  
 

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      batch: formData.get("batch"),
      branch: formData.get("branch"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

     Axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/api/auth/register`, {
      ...data,
    })
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          // sessionStorage.setItem("LoggedIn", true);
          navigate("/signin");
        } else if (res.data.success === false && res.data.err === false) {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        alert("Sorry some error was caused");
        navigate("/signup");
      });
 
  };

  return (
  
    <ThemeProvider theme={theme}>
             <div className="signupContainer">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
          
               <Grid item xs={12} sm={6}>
                   <FormControl fullWidth>
             <InputLabel id="batch-label">Batch</InputLabel>
              <Select
                labelId="batch-label"
                  id="batch"
                  name="batch"
                  fullWidth
                  label="Batch"
                >
                  <MenuItem id="2020" value={"Male"}>
                    2020
                  </MenuItem>
                  <MenuItem id="2021" value={"Female"}>
                    2021
                  </MenuItem>
                   <MenuItem id="2022" value={"Female"}>
                    2022
                  </MenuItem>
                   <MenuItem id="2019" value={"Female"}>
                2019
                  </MenuItem>
                </Select>
                </FormControl>
      
              </Grid>
              <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
             <InputLabel id="branch-label">Branch</InputLabel>
              <Select
                labelId="branch-label"
                  id="branch"
                  name="branch"
                  fullWidth
                  label="Branch"
                >
                  <MenuItem id="cse" value={"Male"}>
                    Cse
                  </MenuItem>
                  <MenuItem id="ece" value={"Female"}>
                    Ece
                  </MenuItem>
                   <MenuItem id="mech" value={"Female"}>
                    Mech
                  </MenuItem>
                   <MenuItem id="sm" value={"Female"}>
                    Sm
                  </MenuItem>
                </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      
      </Container>
      </div>
    </ThemeProvider>
  );
}