import { NavLink } from "react-router-dom"

const EmployeePower = () => {
  return (

    <div>
      <div>
        <h1 className="text-center youngSerif m-10 text-3xl">Employee Dashboard</h1>
      </div>

<div className="flex gap-3 justify-center items-center">
        <div>
        <NavLink to='/dashboard/my-wroksheet'>
        <button className="btn btn-neutral m-20">My Worksheet</button>

        </NavLink>
    </div> 
    <div>
        <NavLink to='/dashboard/payment'>
        <button className="btn btn-neutral m-20">My Payment</button>

        </NavLink>
    </div> 
    </div>

    </div>
    
  )
}

export default EmployeePower