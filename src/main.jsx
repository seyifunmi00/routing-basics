import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./index.css"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import User from "./components/user/User.jsx";
import IndividualUser from "./components/user/IndividualUser.jsx";
import Github, {githubInfoLoader} from "./components/github/Github.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path='contact' element={<Contact/>}/>
            <Route path='user/' element={<User />}>
            <Route path =":id"  element={<IndividualUser />}    />
            </Route>
            <Route
                loader={githubInfoLoader}
                path='github'
                element={<Github/>}/>
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)



//import {createBrowserRouter, createRoutesFromElements, routerprovider and routes} from "react-router-dom";
//create the route constant
//the index element is the element that will be rendered when the  /route is visited
//Check out the layout page
//Dynamic routing in User.jsx
//loading up information when the user hovers over a link Github.jsx
