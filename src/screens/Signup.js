import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as LinkRoute} from "react-router-dom";


const theme = createTheme();


const Signup = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

                <Container component="main" maxWidth="lg" >
                    <Typography m={2} style={{ color: "gray", fontSize: 30 }}>JOIN US</Typography>
                    <hr style={{ borderWidth: 2, borderColor: "black" }} />

                    <Grid container spacing={6} >
                        <Grid item xs={12} md={6} >
                            
                            <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                                Personal Information
                            </Typography>


                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                sx={{ my: 2 }}

                            />

                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                sx={{ my: 2 }}
                            />
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label=" Get promotions and updates via email."
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                        <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                                Sign-in Information
                            </Typography>
                            <TextField
                             sx={{ my: 2 }}
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />

                            <TextField
                             sx={{ my: 2 }}
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                            <TextField
                             sx={{ my: 2 }}
                                required
                                fullWidth
                                name="confirm password"
                                label="confirm Password"
                                type="password"
                                id="confirm password"

                            />



                            <Button style={{ background: "black", borderRadius: 0 }} fullWidth
                                type="submit" variant="contained" sx={{ mt: 2, mb: 2, p:1}} >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Link component={LinkRoute} to="/login" href="#" variant="body2" >
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </ThemeProvider>

    )
}

export default Signup