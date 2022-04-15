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




const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
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
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
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