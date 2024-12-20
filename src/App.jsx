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
import Sidebar from "./Components/Sidebar";
import Profile from "./Pages/Profile";
import ContactTechnician from "./Pages/ContactTechnician";
import TechnicianProfile from "./Pages/TechnicianProfile";
import Forgot from "./Pages/Forgot";
import OtpCode from "./Pages/OtpCode";
import NewPassword from "./Pages/NewPassword";
import UserEdit from "./Pages/UserEdit";
import TechnicianEdit from "./Pages/TechnicianEdit";
import Opinion from "./Pages/Opinion";

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
    },{
     path: "/profile/technician-profile/:id",
      element: <TechnicianProfile />
    },{
      path: "/forgot-password",
      element: <Forgot />
    },
    {
      path: "/VerifyOtp/:email",
      element: <OtpCode />
    },
    {
      path: "NewPassword/:email/:code",
      element: <NewPassword />
    },{
      path: "profile/userEdit/:id",
      element: <UserEdit />
    },{
      path: "profile/technicianEdit/:id",
      element: <TechnicianEdit />
    },{
      path: "opinion",
      element: <Opinion />
    },
    {
      path: "*",
      element: '404'
    }
  ]);
  
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}
