import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Marathons from "../pages/Marathons/Marathons";
import MarathonDetails from "../pages/Marathons/MarathonDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import AddMarathon from "../pages/Dashboard/AddMarathon";
import MyMarathons from "../pages/Dashboard/MyMarathons";
import MyApplies from "../pages/Dashboard/MyApplies";
import NotFound from "../pages/NotFound/NotFound";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        loader: () => axios("http://localhost:3000/data"),
        element: <Home />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/marathons",
        loader: () => axios("http://localhost:3000/allData"),
        element: <Marathons />,
      },
      {
        path: "/marathon/:id",
        loader: ({ params }) =>
          axios(`http://localhost:3000/allData/${params.id}`),
        element: <MarathonDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "add-marathon", element: <AddMarathon /> },
      { path: "my-marathons", element: <MyMarathons /> },
      { path: "my-applies", element: <MyApplies /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
