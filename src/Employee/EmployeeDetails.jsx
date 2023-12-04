import { useLoaderData } from "react-router-dom"
import EmployeeDetail from "./EmployeeDetail"

const EmployeeDetails = () => {
    const details = useLoaderData()
  return (
    <div>
        <EmployeeDetail details={details}></EmployeeDetail>

    </div>
  )
}

export default EmployeeDetails