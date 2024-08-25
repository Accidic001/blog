import './App.css';
import {Route,Routes} from 'react-router-dom'
import IndexPage from './Pages/IndexPage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import Layout from './Components/Layout.js';
import { UserContextProvider } from './UserContext.js';
import CreatePost from './Pages/CreatePost.js';
import PostPage from './Pages/PostPage.js';
import AboutPage from './Pages/AboutPage.js';

function App() {
 
  return (
    
    <UserContextProvider>
    <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={
        <IndexPage />
    }/>
    <Route path='/login' element={<LoginPage/>}/>
     <Route path='/register' element={<RegisterPage/>}/>
     <Route path='/create' element = {<CreatePost/>}/>
     <Route path='/post/:id' element ={<PostPage/>}/>
     <Route path ='/about' element ={<AboutPage/>}/>
     </Route>
  </Routes>
  </UserContextProvider>
   
    
  );
}

export default App;
