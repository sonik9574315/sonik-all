import React, { Component } from 'react';
import Users from './components/users';
import Navbar from './components/navbar';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import User from './components/user';
import NotFound from './components/notFound';
import '../src/css/login.css'
// import { BrowserRouter } from 'react-router-dom';
  // {/* <Route path='/users/:id'  Component={User}/> */}
class App extends Component {
    
    render() { 
        return (<>
        <div className="mainBody">
                <Navbar/>
                <div className='container mt-3'>
             
                    <Routes>
                    <Route path='/users/:id'  Component={User}/>
                    <Route path='/users'  Component={Users}/>
                    <Route path='/login'  Component={Login}/>
                    <Route path='/register'  Component={Register}/>
                    <Route path='*'  Component={NotFound}/>
                    <Route path='/'  element={<Home/>}/>
                    </Routes>
                

                </div>
                </div>
        </>);
    }
}
 
export default App ;






// <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>