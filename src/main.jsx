import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import User from "./components/user/User.jsx";
import IndividualUser from "./components/user/IndividualUser.jsx";
import Github, { githubInfoLoader } from "./components/github/Github.jsx";
import Login from "./components/login/Login.jsx";
import Profile from "./components/profile/Profile.jsx";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute.jsx";



const App = () => {
    const [isLogged, setIsLogged] = useState(false); // State to manage login status

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route
                    path="user"
                    element={
                        <ProtectedRoute isLogged={isLogged}>
                            <User />
                        </ProtectedRoute>
                    }
                >
                    <Route path=":id" element={<IndividualUser />} />
                </Route>
                <Route loader={githubInfoLoader} path="github" element={<Github />} />
                <Route path="/login" element={<Login isLogged={isLogged} setIsLogged={setIsLogged}/>} />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute isLogged={isLogged}>
                            <Profile />
                        </ProtectedRoute>
                    }
                />

            </Route>


        )
    );

    return (
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    );
};

createRoot(document.getElementById("root")).render(<App />);



//import {createBrowserRouter, createRoutesFromElements, routerprovider and routes} from "react-router-dom";
//create the route constant
//the index element is the element that will be rendered when the  /route is visited
//Check out the layout page
//Dynamic routing in User.jsx
//loading up information when the user hovers over a link Github.jsx
//protected route inside protected.jsx
