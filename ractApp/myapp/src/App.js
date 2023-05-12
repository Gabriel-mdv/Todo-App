// import logo from './logo.svg';
import './index.css';
import Navbar from './components/Navbar';
import SingleJoke from './components/singleJoke.js';
import { Box } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Navbar />


      <Box>
        <SingleJoke setup='How did the programmer die in the shower?' 
        punchline='He read the shampoo bottle instructions: Lather. Rinse. Repeat.' />
        <SingleJoke punchline='There are only 10 kinds of people in this world: those who know binary and those who don’t.' />
        <SingleJoke punchline='You are my african queen' />
        <SingleJoke setup='How did the hacker escape the police?' 
        punchline='He just ransomware' />
      </Box>


    </div>
  );
}

export default App;
