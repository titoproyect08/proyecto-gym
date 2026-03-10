import { createBrowserRouter } from "react-router";
import { Login } from "./components/Login";
import { AdminLayout } from "./components/AdminLayout";
import { Dashboard } from "./components/Dashboard";
import { Users } from "./components/Users";
import { Exercises } from "./components/Exercises";
import { Routines } from "./components/Routines";
import { Nutrition } from "./components/Nutrition";
import { Challenges } from "./components/Challenges";
import { Community } from "./components/Community";
import { Statistics } from "./components/Statistics";
import { Settings } from "./components/Settings";
import { Admins } from "./components/Admins";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "users", Component: Users },
      { path: "exercises", Component: Exercises },
      { path: "routines", Component: Routines },
      { path: "nutrition", Component: Nutrition },
      { path: "challenges", Component: Challenges },
      { path: "community", Component: Community },
      { path: "statistics", Component: Statistics },
      { path: "settings", Component: Settings },
      { path: "admins", Component: Admins },
    ],
  },
]);
