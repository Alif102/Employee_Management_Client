import { useEffect, useState } from "react";
import axios from 'axios'
import toast from "react-hot-toast";
import CardViewCard from "./CardViewCard";

const CardView = () => {
    const [toggle,setToggle] = useState(true);

    const [employees, setEmployees] = useState([]);
    const [RemoveEmployee, setRemoveEmployee] = useState();
    useEffect(()=> { 
        fetch('http://localhost:5000/users')
        .then((res)=> res.json())
        .then((data)=> setEmployees(data))
        .catch(error => console.error(error))
    },[toggle])

    const handleClick = (role, id)=> {
      axios.patch(`http://localhost:5000/users/role/${id}?role=${role}`)
      .then(data => {
        if(data.data.success){
          role? toast.success('Toggle Successfull') : toast.success('Not Verified')
          setToggle(!toggle)
        }
      })
  }
  return (
    <div>
      
        <CardViewCard employees={employees}
        RemoveEmployee={RemoveEmployee} 
        toggle = {toggle}
        setToggle={setToggle}
        setRemoveEmployee={setRemoveEmployee} 
        handleClick={handleClick}
        />
    </div>
  )
}

export default CardView