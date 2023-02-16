import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../auth/Login";
import SignUp from "../auth/SignUp";
import Raca from "../Raca"
import Gajuz from "../Gajuz"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/raca",
    element: <Raca />,
  },
  {
  path: "/gajuz",
  element: <Gajuz/>,
  },
]);
