import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Marathons from "../pages/Marathons/Marathons";
import MarathonDetails from "../pages/Marathons/MarathonDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import AddMarathon from "../pages/Dashboard/AddMarathon";

import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
import axios from "axios";
import MyApplies from "../pages/Dashboard/MyApplies";
import MyMarathons from "../pages/Dashboard/MyMarathon/MyMarathons";
import MarathonRegistration from "../pages/marathonRegistration/marathonRegistration";
import Loader from "../components/Loader";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashbordHome from "../pages/Dashboard/DefaultDashboard/DashbordHome";
import AboutUs from "../pages/Home/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import ForeoFore from "../pages/ForeoFore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />, // MainLayout level error
    hydrateFallbackElement: <Loader />,
    children: [
      {
        path: "/",
        loader: () => axios("https://assignmein11.vercel.app/data"),
        hydrateFallbackElement: <Loader />,
        errorElement: <ErrorPage />, // loader fail হলে show হবে
        element: <Home />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/marathons",
        loader: () => axios("https://assignmein11.vercel.app/allMarathonData"),
        hydrateFallbackElement: <Loader />,
        errorElement: <ErrorPage />,
        element: <Marathons />,
      },
      {
        path: "/marathon/:id",
        loader: ({ params }) =>
          axios(`https://assignmein11.vercel.app/allData/${params.id}`),
        hydrateFallbackElement: <Loader />,
        errorElement: <ErrorPage />,
        element: (
          <PrivateRoute>
            <MarathonDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/aboutUs",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/marathonRegistration/:id",
        loader: ({ params }) =>
          axios(`https://assignmein11.vercel.app/allData/${params.id}`),
        hydrateFallbackElement: <Loader />,
        errorElement: <ErrorPage />,
        element: (
          <PrivateRoute>
            <MarathonRegistration />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    hydrateFallbackElement: <Loader />,
    errorElement: <ErrorPage />, // DashboardLayout level error
    children: [
      {
        index: true,
        element: <DashbordHome />,
      },
      {
        path: "addMarathon",
        element: (
          <PrivateRoute>
            <AddMarathon />
          </PrivateRoute>
        ),
      },
      {
        path: "myMarathons",
        hydrateFallbackElement: <Loader />,
        errorElement: <ErrorPage />,
        element: (
          <PrivateRoute>
            <MyMarathons />
          </PrivateRoute>
        ),
      },
      {
        path: "myApplies",
        hydrateFallbackElement: <Loader />,
        errorElement: <ErrorPage />,
        element: (
          <PrivateRoute>
            <MyApplies />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <ForeoFore /> },
]);

export default router;
