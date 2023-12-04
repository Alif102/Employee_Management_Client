import { useEffect, useState } from "react";
import axios from 'axios'
import toast from "react-hot-toast";
import EmployeTable from "./EmployeTable";

const EmployeeUser = () => {
  const [toggle,setToggle] = useState(true);
  const handleClick = (boolean, id)=> {
      axios.patch(`http://localhost:5000/users/${id}?verified=${boolean}`)
      .then(data => {
        if(data.data.success){
          boolean? toast.success('Verified') : toast.success('Not Verified')
          setToggle(!toggle)
        }
      })
  }
  const [employees, setEmployees] = useState([]);
    useEffect(()=> { 
        fetch('http://localhost:5000/usersby/employee')
        .then((res)=> res.json())
        .then((data)=> setEmployees(data))
        .catch(error => console.error(error))
    },[toggle])
  return (
    <div>
      <EmployeTable  employees={employees} handleClick={handleClick}></EmployeTable>
    </div>
  )
}

export default EmployeeUser