import React from 'react'
import {Box, Grid, Typography} from '@material-ui/core'
import {TextField , Button} from '@mui/material'
import { useState } from 'react'



function Meme(props){

  



    return(
        <Box style={{padding: '10vh 20px'}}>


          
          <Box component='form' noValidate autoComplete='off'>

            <Grid container spacing={3}>    

                <Grid item md={6} xs={12}>
                    <TextField variant='outlined' label='search for a meme' style={{width: '100%'}}/>
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextField variant='outlined' label='Language' style={{width: '100%'}}/>
                </Grid>

                <Grid item xs={12} style={{textAlign: 'center', marginTop: '3vh'}}>
                    <Button variant='contained' style={{width: '60%', margin:'auto',
                    padding: '10px 0',
                     background: '#672280', borderRadius: '5px'}}
                     
                     >
                      <Typography variant='p'>
                        Get a new meme image 🏞
                      </Typography>


                    </Button>
                </Grid>
                

            </Grid>
            
          </Box>



        </Box>
    )
}

export default Meme;



