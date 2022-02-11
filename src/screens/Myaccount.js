import { Grid,Button } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Typography from '@mui/material/Typography';

const Myaccount = () => {
  return (
   <>
   <Grid container p={1} >
   <Grid item xs={12} md={6} >
                            
                            <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                                Account Information
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
                                control={<Checkbox value="ChagePassword" color="primary" />}
                                label=" Change Password"
                            />
                            <Grid py={2}>
                              <Typography  py={2} style={{fontSize:14,color:"gray"}}>In order to reset your password,please Signout and Click on "Forget Password" form the Signin page.</Typography>
                             <Button  style={{ background: "black", borderRadius: 0 }} 
                                type="submit" variant="contained"  >
                                Save
                            </Button></Grid>
                        </Grid>
   </Grid>
   </>
  )
}

export default Myaccount