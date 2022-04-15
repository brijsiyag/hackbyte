import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import "./login.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { setLoggedIn } from "../../features/auth/authSlice";

Axios.defaults.withCredentials = true;

const theme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => {
    return state.auth;
  });
  console.log(isLoggedIn);
  document.title = "Login";

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const admin ={email :"ayush@gmail.com", password:"12345"}
    if(data.email === admin.email && data.password === admin.password){
      alert("Admin Login!");
      navigate("/admin");

    }
    else{
    Axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/api/auth/login`, {
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        // console.log(res.data);
        if (res.data.success === true) {
          // props.setLoggedIn(true);
          dispatch(setLoggedIn(true));
          navigate("/");
        } else if (res.data.success === false && res.data.err === false) {
          alert(res.data.message);
          //   createNotification(res.data.err, "error", 3000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="loginContainer">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
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
