import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>
      <div>
        <Link to='/dashboard/employee-list'>
        <button className="btn btn-neutral m-20">Employee List</button>

        </Link>
    </div>

    <div>
        <Link to='/dashboard/my-wroksheet'>
        <button className="btn btn-neutral m-20">My Worksheet</button>

        </Link>
    </div>
    </div>
  )
}

export default Dashboard