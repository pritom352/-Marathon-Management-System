import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Marathons from "../pages/Marathons/Marathons";
import MarathonDetails from "../pages/Marathons/MarathonDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import AddMarathon from "../pages/Dashboard/AddMarathon";
// import MyMarathons from "../pages/Dashboard/MyMarathons";
// import MyApplies from "../pages/Dashboard/MyApplies";
import NotFound from "../pages/NotFound/NotFound";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
import axios from "axios";
import MyApplies from "../pages/Dashboard/MyApplies";
import MyMarathons from "../pages/Dashboard/MyMarathon/MyMarathons";
import MarathonRegistration from "../pages/marathonRegistration/marathonRegistration";
import Loader from "../components/Loader";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashbordHome from "../pages/Dashboard/DefaultDashboard/DashbordHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,

    hydrateFallbackElement: <Loader></Loader>,

    children: [
      {
        path: "/",
        loader: () => axios("https://assignmein11.vercel.app/data"),
        hydrateFallbackElement: <Loader></Loader>,
        element: <Home />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/marathons",
        loader: () => axios("https://assignmein11.vercel.app/allMarathonData"),
        hydrateFallbackElement: <Loader></Loader>,
        element: <Marathons />,
      },
      {
        path: "/marathon/:id",
        loader: ({ params }) =>
          axios(`https://assignmein11.vercel.app/allData/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <MarathonDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/marathonRegistration/:id",
        loader: ({ params }) =>
          axios(`https://assignmein11.vercel.app/allData/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <MarathonRegistration></MarathonRegistration>
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
    hydrateFallbackElement: <Loader></Loader>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <DashbordHome></DashbordHome>,
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
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <MyMarathons />
          </PrivateRoute>
        ),
      },
      {
        path: "myApplies",
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <MyApplies />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
]);

export default router;
