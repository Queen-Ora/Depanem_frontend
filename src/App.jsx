import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; //celui ci c'est pour gerer les animations
import AboutPage from "./Pages/AboutPage";
import Services from "./Pages/Services";
import Booking from "./Pages/Booking";
import Testimonial from "./Pages/Testimonial";
import Login from "./Pages/Login";
import Register from "./Pages/Register/Register-User";





export default function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/booking",
      element: <Booking />,
    },
    {
      path: "/testimonials",
      element:<Testimonial/>
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register-user",
      element:<Register/>
    },
    {
      path: "/createGroup",
      element: ''
    },
    {
      path: "/GroupDetails/:groupId",
      element: ''
    },
    {
      path: "/addMember/:groupId",
     element: ''
    },
    {
      path: "*",
      element: ''
    }
  ]);
  
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}
