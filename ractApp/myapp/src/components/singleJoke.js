import React from 'react'
import { Box, Typography, Paper, Button, ButtonGroup} from '@material-ui/core'


function VariantButtonGroup({likes, dislikes, comments}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>LIKE {likes}</Button>
        <Button>DISLIKE {dislikes}</Button>
        <Button>COMMENT {comments}</Button>
      </ButtonGroup>
    </Box>
  );
}

function SingleJoke({setup, punchline, likes, dislikes, comments}){
    return(

                <Box style={{paddingTop: '20px'}} mt={10}>

                    <Paper>
                    
                    <Typography style={{color: 'green'}}>
                        setup: {setup? setup: 'Free joke 🤣'}
                    </Typography>
                    <Typography>
                        punchline: {punchline}
                    </Typography>

                    <Box style={{textAlign: 'center'}}>

                        
                        <VariantButtonGroup/>

                    </Box>

                    </Paper>
                </Box>

    )
}



export default SingleJoke;