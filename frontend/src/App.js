import './App.css';
import Write from './links/write/write';
import Home from './components/home/home';
import About from './links/about/about';
import Contact from './links/contact/contact';
import Profile from './links/profile/profile';
import Signup from './links/signup/signup';
import Login from './links/login user/user'; 
import {Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  // const user = localStorage.getItem("token");
  return (
    <div className="App">
      <Routes>
     <Route path="/" exact element={<Home/>}/>
      <Route path="/home" exact element={<Home/>}/>
      <Route path="/write" exact element={<Write/>}/>
      <Route path="/contact" exact element={<Contact/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/signup" exact element={<Signup/>}/>
      <Route path="/about" exact element={<About/>}/>
      <Route path="/profile/:id" exact element={<Profile/>}/>
      </Routes>
      <ToastContainer />
      </div>

  );
}
export default App;
