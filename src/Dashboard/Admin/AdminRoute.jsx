import {  NavLink } from "react-router-dom"

const AdminRoute = () => {
  return (
    <div>
      <div>
        <h1 className="text-center youngSerif text-3xl">Admin Dashboard</h1>
      </div>
        <NavLink to='/dashboard/all-hr-employee-list'>
        <button className="btn btn-neutral m-20"> All Employee & HR List</button>

        </NavLink>
    </div>
  )
}

export default AdminRoute