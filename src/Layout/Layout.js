import React from "react";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Chatbox from "../pages/chatbox/Chatbox";

// Components:
import Nav from "../Components/nav/Nav";
import LeftBar from "../Components/leftbar/LeftBar";
import RightBar from "../Components/rightbar/RightBar";

export default function Layout() {
  const Feed = () => {
    return (
      <>
        <Nav />
        <main>
          <LeftBar />
          <div className="container">
            <Outlet />
          </div>
          <RightBar />
        </main>
      </>
    );
  };
  //Router----------
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Feed />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/chatbox/:id",
          element: <Chatbox />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
