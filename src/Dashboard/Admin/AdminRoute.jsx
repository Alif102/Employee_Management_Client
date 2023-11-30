import { Link } from "react-router-dom"

const AdminRoute = () => {
  return (
    <div>
        <Link to='/employee-list'>
        <button className="btn btn-neutral m-20"> All Employee & HR List</button>

        </Link>
    </div>
  )
}

export default AdminRoute