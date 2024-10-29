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
import TechnicianRegister from "./Pages/Register/Register-Technician";
// import ProfilePage from "./Pages/Profile";
import Sidebar from "./Components/Sidebar";
import Profile from "./Pages/Profile";
import ContactTechnician from "./Pages/ContactTechnician";






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
      path: "/technician-user",
      element: <TechnicianRegister/>
    },
    {
      path: "/profile",
      element: <Profile/>
    },
    {
      path: "test",
     element: <Sidebar/>
    },{
      path: "/contact-technician/:tech_id",
      element: <ContactTechnician />
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
