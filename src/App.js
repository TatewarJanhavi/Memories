import Header from './Components/Header'
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Memories from './Components/Memories';
import CreateMemories from './Components/CreateMemories';
import Footer from './Components/Footer';


function App() {
  return (
   
    <Router>
       <Header></Header>
      <Switch>
      
        <Route path="/signup">
          <Signup />
        </Route>
       
        <Route exact path="/">
          <Home />
        </Route>
       
        <Route  path="/login">
          <Login />
        </Route>
        <Route path="/memories/:userName" component={Memories} />
        
        <Route path="/:userName/memories/addMemories" component={CreateMemories} />
        <Route path="/:userName/memories/editMemories/:itemId" component={CreateMemories} />
       </Switch>
       <Footer></Footer>
   </Router>
  
  )
}

export default App;
