import './App.css';
import TweetAdd from './components/tweetAdd';
import Login from './components/login';
import Navbar from './components/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App () {
  return (
    <> 
     <Navbar />
    <Routes>
     
      
    
    <Route path='/' element= { <div className="App">
      <TweetAdd />
  
    </div>} />
      <Route path='/login' element={<Login/> } />
      
     
    {/* <div className="App">
      <TweetAdd />
  
    </div> */}
    
    </Routes>
    </>
   
  );
}

export default App;
