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
    name: "RMA",
    key: "rma",
    route: "/rma",
    component: <RMA/>,
    noCollapse: true,
  }
];

export default routes;
