import useRole from "../Hooks/useRole"
import HRpower from "./HRRoute/HRpower";
import EmployeePower from "./EmployeeRoute/EmployeePower";
import AdminRoute from "./Admin/AdminRoute";

const Dashboard = () => {
  const [role] = useRole();
  console.log( 'role',role)
  return (
    <div>
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