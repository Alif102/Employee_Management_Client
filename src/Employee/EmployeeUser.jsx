import { useEffect, useState } from "react";
import EmployeTable from "./EmployeTable";

const EmployeeUser = () => {
  
  const [employees, setEmployees] = useState([]);
    useEffect(()=> { 
        fetch('http://localhost:5000/users/employee')
        .then((res)=> res.json())
        .then((data)=> setEmployees(data))
        .catch(error => console.error(error))
    },[])
  return (
    <div>
      <EmployeTable employees={employees}></EmployeTable>
    </div>
  )
}

export default EmployeeUser