import useRole from "../Hooks/useRole"
import HRpower from "./HRRoute/HRpower";
import EmployeePower from "./EmployeeRoute/EmployeePower";
import AdminRoute from "./Admin/AdminRoute";
import { Helmet } from "react-helmet";
import UseAuth from "../Hooks/UseAuth";

const Dashboard = () => {
  const { loading} = UseAuth();

  const [role] = useRole();
  console.log( 'role',role)
  if (loading) 
  {
      return <h2 className="text-4xl text-center mt-10">Loading .......</h2>
       
  }
 
  return (
    <div>
       <Helmet>
        <title>Dashboard - Employee Management</title>
        <meta name="description" content="This is Home" />
      </Helmet>
     {/* <div>
        <NavLink to='/dashboard/employee-list'>
        <button className="btn btn-neutral m-20">Employee List</button>

        </NavLink>
    </div> */}
    {
      role === "hr" &&  <HRpower/>
       }
       {      role === "employee" &&  <EmployeePower/>}
       {role === "admin" && <AdminRoute/>}

    {/* <div>
        <NavLink to='/dashboard/my-wroksheet'>
        <button className="btn btn-neutral m-20">My Worksheet</button>

        </NavLink>
    </div>  */}


    </div>
  )
}

export default Dashboard