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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,

    hydrateFallbackElement: <Loader></Loader>,
    // errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        loader: () => axios("http://localhost:3000/data"),
        hydrateFallbackElement: <Loader></Loader>,
        element: <Home />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/marathons",
        loader: () => axios("http://localhost:3000/allData"),
        hydrateFallbackElement: <Loader></Loader>,
        element: <Marathons />,
      },
      {
        path: "/marathon/:id",
        loader: ({ params }) =>
          axios(`http://localhost:3000/allData/${params.id}`),
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
          axios(`http://localhost:3000/allData/${params.id}`),
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
        {" "}
        <DashboardLayout />
      </PrivateRoute>
    ),
    hydrateFallbackElement: <Loader></Loader>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
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
        element: (
          <PrivateRoute>
            <MyMarathons />
          </PrivateRoute>
        ),
      },
      {
        path: "myApplies",
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
