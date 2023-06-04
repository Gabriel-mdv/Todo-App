// import logo from './logo.svg';
import './index.css';
import Header from './components/header';
import Meme from './components/meme';
import { Box } from '@material-ui/core';
import { useState } from 'react';
import boxes from './components/boxes';
import BoxContainer from './containers/BoxContainer';
import FormContainer from './containers/formContainer.jsx';

function App() {

  const [boxItems, setBoxItems] = useState(boxes)


  function toggleColor (id){
    setBoxItems((prevBoxes) => {
      return prevBoxes.map(box => {
        return box.id === id ? {...box, on: !box.on}: box
      })
    })

    console.log(id)
  }


  const boxDisplay = boxItems.map((box) => (

    <div>
    
     <BoxContainer toggleColor ={toggleColor} key={box.id} id={box.id} on={box.on}/>

     </div>
  ))


  return (
    <div className="App">

      <Header/>
      <Meme/>

      <Box>

      <div style={{display: 'flex', flexWrap: 'wrap'}}>

      {boxDisplay}

    </div>

      

      </Box>


      <FormContainer/>

    </div>
  );
}

export default App;
