import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material'

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router";


const theme = createTheme();

const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
        email: data.get('email'),
        password: data.get('password'),
    });
};


const Login = () => {
    const Navigate = useNavigate()
    const NavigatingTosignup =() =>{
      Navigate("/signup")
  }
    return <>
        <Container maxWidth="lg">
            <Typography m={2} style={{ color: "gray", fontSize: 30 }}>JOIN US</Typography>
            <hr style={{ borderWidth: 2, borderColor: "black" }} />
            <Grid container maxWidth="lg" spacing={2}>
                <Grid item  md={6} sm={12} >
                    <h3>Registered Customer</h3>
                    <Typography>If you have an account, sign in with your email address.</Typography>

                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Box pr={2} >
                            <Box component="form" onSubmit={handleSubmit} noValidate >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    
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
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button style={{background:"black" , borderRadius:0}}
            
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container >
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Box>
                    </ThemeProvider>

                </Grid>

                <Grid item  md={6} sm={12}>
                <h3>New Customer</h3>
                    <Typography>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.

</Typography>
<Button onClick = {NavigatingTosignup}style={{background:"black" , borderRadius:0}}
            type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} >
           Create an Account
        </Button>

                </Grid>

            </Grid>
        </Container>

    </>;
};

export default Login;
