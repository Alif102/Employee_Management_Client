import { useEffect, useState } from "react";
import AllUsersTable from "./AllUsersTable";

const AllUsers = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(()=> { 
        fetch('https://employeeserver.vercel.app/users')
        .then((res)=> res.json())
        .then((data)=> setEmployees(data))
        .catch(error => console.error(error))
    },[])
  return (
    <div>
        <AllUsersTable employees={employees}/>
    </div>
  )
}

export default AllUsers