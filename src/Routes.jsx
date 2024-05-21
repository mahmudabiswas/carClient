import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "./Components/ErrorPage/Error";
import App from "./App";
import Home from "./Components/Home/home/home";
import Services from "./Components/Pages/Services/Services";
import About from "./Components/Pages/About/About";
import LogIn from "./Components/Home/SignUpPag/LogIn";
import SignUp from "./Components/Home/SignUpPag/SignUp";
import CheckOut from "./Components/Pages/CheckOut/CheckOut";
import Booking from "./Components/Pages/CheckOut/booking";
import PrivateRoute from "./Components/Pages/PrivateRoute/PrivateRoute";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/checkOut/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routes;
