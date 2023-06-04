import React from 'react'
import {Box, Grid, Typography} from '@material-ui/core'
import trollface from '../images/troll-face.png'



function Header (props) {

    return(
        <Box>

            <Grid container style={{background: '#672280'}}>
                <Grid item xs={8} style={{display: "flex", alignItems:'center'}}>
                    < img src= {trollface} alt='troll face for the meem'/>
                    <Typography variant='h2' style={{color: 'white', fontSize: 'x-large', fontWeight: 'bolder'}}>
                        Meme Generator By Gabriel
                    </Typography>
                    
                </Grid>

                <Grid item xs={2} style={{margin: "auto", color: "white"}}>
                    <Typography variant='h3' style={{fontSize: 'larger', fontWeight: 'bold'}}>
                        lol lol 🤣🤣🤣🤣
                    </Typography>
                </Grid>

              

            </Grid>

        </Box>
    )
    
}


export default Header;