import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Profile from "@/pages/Profile";

import DashboardLayout from "@/components/layouts/DashboardLayout";

import ManageCars from "@/pages/admin/ManageCars";
import ManageBookings from "@/pages/admin/ManageBookings";
import Dashboard from "@/pages/admin/Dashboard";
import ManageReturnCars from "@/pages/admin/ManageReturnCars";
import UserManagement from "@/pages/admin/UserManagement";
import PaymentManagement from "@/pages/user/PaymentManagement";
import BookingManagement from "@/pages/user/BookingManagement";
import ProtectedRoute from "@/components/layouts/ProtectedRoute";
import Car from "@/pages/Car";
import Error from "@/pages/Error";
import CarListing from "@/pages/CarListing";

import Checkout from "@/pages/Checkout";
import BookingSuccess from "@/pages/BookingSuccess";
import Home from "@/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/cars",
        element: <CarListing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/car/:id",
        element: <Car />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },

  // {
  //   path: "/register",
  //   element: <Register />,
  // },

  {
    path: "/booking-success",
    element: <BookingSuccess />,
  },

  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,

        element: <Profile />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "booking-management",
        element: <BookingManagement />,
      },
      {
        path: "payment-management",
        element: <PaymentManagement />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <DashboardLayout />
      </ProtectedRoute>
    ),

    children: [
      {
        index: true,

        element: <Profile />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "manage-cars",
        element: <ManageCars />,
      },
      {
        path: "manage-bookings",
        element: <ManageBookings />,
      },
      {
        path: "manage-return-cars",
        element: <ManageReturnCars />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
    ],
  },
]);
