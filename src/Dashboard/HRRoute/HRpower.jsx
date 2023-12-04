import { NavLink } from "react-router-dom"

const HRpower = () => {
  return (
    <div>
      <div>
        <h1 className="text-center youngSerif text-3xl">HR Dashboard</h1>
      </div>
        <div>
        <NavLink to='/dashboard/employee-list'>
        <button className="btn btn-neutral m-20">Employee List</button>

        </NavLink>
    </div>
    </div>
  )
}

export default HRpower