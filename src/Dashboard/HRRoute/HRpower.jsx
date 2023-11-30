import { NavLink } from "react-router-dom"

const HRpower = () => {
  return (
    <div>
        <div>
        <NavLink to='/dashboard/employee-list'>
        <button className="btn btn-neutral m-20">Employee List</button>

        </NavLink>
    </div>
    </div>
  )
}

export default HRpower