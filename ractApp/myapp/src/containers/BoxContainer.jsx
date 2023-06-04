import React from 'react'
import { Box } from '@material-ui/core'

const BoxContainer = (props) => {

    const styles = 
        {border: '2px solid gray', 
        padding: '40px',borderRadius: '5px',
        backgroundColor: props.on ? '#222222': 'transparent'
    }

  return (
    <div >
        <Box width='100px' height='100px' style={styles} onClick={() => props.toggleColor(props.id)}>
      <p>{props.id}</p>

    </Box>
    </div>
  )
}

export default BoxContainer


