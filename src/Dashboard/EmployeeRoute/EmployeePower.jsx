import { NavLink } from "react-router-dom"

const EmployeePower = () => {
  return (
    <div>
        <div>
        <NavLink to='/dashboard/my-wroksheet'>
        <button className="btn btn-neutral m-20">My Worksheet</button>

        </NavLink>
    </div> 
    </div>
  )
}

export default EmployeePower