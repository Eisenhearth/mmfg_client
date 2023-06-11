import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About"
import Contact from "./views/Contact"
import Dashboard from "./views/Dashboard"
import Login from "./views/Login"
import Signup from "./views/Signup"
import Pricing from "./views/Pricing";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Payment from "./views/Payment";

const router = createBrowserRouter([
            {
                path: "/",
                element: <DefaultLayout />,
                children: [

                    {
                        path: '/about',
                        element: <About />
                    },
                    {
                        path: '/contact',
                        element: <Contact />
                    },
                    {
                        path: '/dashboard',
                        element: <Dashboard />
                    },
                    {
                        path: '/payment',
                        element: <Payment />
                    },
                    {
                        path: '/pricing',
                        element: <Pricing />
                    },
                    {
                        path: '/home',
                        element: <Navigate to="/" />
                    },
                    {
                        path: '/',
                        element: <Home />
                    },

                ],
            },
            {
                path: "/",
                element: <GuestLayout />,
                children: [
                    {
                        path: '/login',
                        element: <Login />
                    },
                    {
                        path: '/signup',
                        element: <Signup />
                    },
                ],
            }   
])

export default router;