import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github,{githubInfoData} from './components/Github/Github'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// const router=createBrowserRouter([
//  { path:"/",
//   element:<Layout/>,
//   children:[{
//     path:"",
//     element:<Home/>},

//     {    
//      path:"about",
//      element:<About/>
//     },

//     {     
//      path:"contact",
//      element:<Contact/>
//     },
//     {
//       path:"github",
//       element:<Github/>,
//       loader:githubInfoData
//  }]
// }]);
const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route
           loader={githubInfoData}
           path="github" 
           element={<Github/>}/>
    
    

  </Route>
))


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
