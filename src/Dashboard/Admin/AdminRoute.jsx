import {  NavLink } from "react-router-dom"

const AdminRoute = () => {
  return (
    <div>
        <NavLink to='/dashboard/all-hr-employee-list'>
        <button className="btn btn-neutral m-20"> All Employee & HR List</button>

        </NavLink>
    </div>
  )
}

export default AdminRoute