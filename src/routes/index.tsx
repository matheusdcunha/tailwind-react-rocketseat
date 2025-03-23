import { BrowserRouter } from "react-router-dom";

import { Loading } from "../components/Loading";

import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

const isLoading = false

const session = {
  user:{
    role: "employee"
  }
}

export function Routes() {

  function Route(){
    switch (session?.user.role) {
      case "employee":
       return <EmployeeRoutes />
      case "manager":
        return <ManagerRoutes/>
      default:
        return <AuthRoutes />
    }
  }

  if(isLoading){
    return <Loading/>
  }

  return (
    <BrowserRouter>
      {Route()}
    </BrowserRouter>
  )
}