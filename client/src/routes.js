import Login from "layouts/FairShare/login";
import MapDisplay from "layouts/FairShare/mapdisplay";
import Profile from "layouts/FairShare/profile";
import Signup from "layouts/FairShare/signup";
import SurplusForm from "layouts/FairShare/surplusform";
import Home from "layouts/overlord/home";
import RMA from "layouts/overlord/RMA";
import StudentList from "layouts/overlord/student_list";
import SignIn from "layouts/signin";

const routes = [
  {
    type: "collapse",
    name: "Signin",
    key: "signin",
    route: "/signin",
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "StudentList",
    key: "studentlist",
    route: "/studentlist",
    component: <StudentList/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Home",
    key: "home",
    route: "/home",
    component: <Home/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    component: <Profile/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Login",
    key: "login",
    route: "/login",
    component: <Login/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Signup",
    key: "signup",
    route: "/signup",
    component: <Signup/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "SurplusForm",
    key: "surplusform",
    route: "/surplusform",
    component: <SurplusForm/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "MapDisplay",
    key: "mapdisplay",
    route: "/mapdisplay",
    component: <MapDisplay/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "RMA",
    key: "rma",
    route: "/rma",
    component: <RMA/>,
    noCollapse: true,
  }
];

export default routes;
