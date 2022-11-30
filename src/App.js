import './App.css';
import TweetAdd from './pages/tweetAdd';
import Login from './pages/login';
import Navbar from './components/Navbar';
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
