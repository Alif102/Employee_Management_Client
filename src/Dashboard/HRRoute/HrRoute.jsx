import { Link } from "react-router-dom"

const HrRoute = () => {
  return (
    <div>
        <Link to='/employee-list'>
        <button className="btn btn-neutral m-20">Employee List</button>

        </Link>
    </div>
  )
}

export default HrRoute