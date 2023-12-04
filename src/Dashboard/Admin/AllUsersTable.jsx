/* eslint-disable react/prop-types */
// import  { useState } from 'react';
import Swal from 'sweetalert2';
// import ToggleBtn from "../../Shared/ToggleBtn";

import { BiSolidUserX } from "react-icons/bi";

const AllUsersTable = ({ employees, toggle, setToggle, handleClick }) => {
  
    
  console.log(employees)
  
// const toggleHandler = event => {
//     setToggle(event.target.checked);
//   }
  
   
  //  const handleToggleStatus = () => {
  //   setToggleOn(!isToggleOn);
  // };
  
  //   const [isToggleOn, setToggleOn] = useState("❌");
  const filteredData = employees.filter(employee => employee.isVerified === "true");
 
  const handleFired =(id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33', 
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {


            fetch(`http://localhost:5000/users/fired/${id}`, {
                method: 'PATCH'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.success === true) {
                      setToggle(!toggle) 
                      Swal.fire(
                            'Fired!',
                            'Your Employee has been Fired.',
                            'success'
                        )
                        // const remaining = RemoveEmployee.filter(removeCart => removeCart.id !== id);
                        // setRemoveEmployee(remaining);
                    }
                })

        }
    })
  }
  return (

    <div className=" max-w-[1100px] mx-auto">
      <h1 className=' text-center bg-cyan-200 p-6 font-bold text-2xl'>All Verified Employee & HR </h1>
        {/* {employees.length} */}
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Designation</th>
        <th>Make HR</th>
        <th>Status</th>
        <th>Fired</th>
        

      </tr>
    </thead>
    
      {/* employees.isVerified === 'true' &&  */}
    
    <tbody>
        { filteredData.map((employee) => (


<tr key={employee.email}>
 
        
<td>
      <h2 className="font-bold">{employee.name}</h2>
</td>
<td>
  {employee.designation}
</td>
{/* <td>
<ToggleBtn toggleHandler={toggleHandler} />

</td> */}
<td>
{
                  employee.role === 'employee' ? <button className='btn btn-info' onClick={()=> handleClick("hr",employee?._id)}>Employee</button> : <button className='btn btn-success' onClick={()=> handleClick("employee", employee?._id)}>HR</button>
                }
</td>


 {/*  <td>
             {!employee.verified ? (
                <button onClick={() => handleToggleStatus(index)}>Not Verified ❌</button>
              ) : (
                <button onClick={() => handleToggleStatus(index)}>Verified ✅</button>
              )}
            </td>  */}
            
            


<td>
                {
                   employee.isVerified === "true" ? <button className='btn btn-neutral'>Verified</button> : "Verified"
                }
                {/* <p> <button onClick={handleToggleStatus}>{isToggleOn ? 'Not Verified ❌' : 'Verified ✅'}  </button> </p> */}

                
             
            </td>
            <td >
              {
                employee?.isFired ? "Fired" : 
                <button className=' cursor-pointer' onClick={()=> handleFired(employee._id)}>
                
                <BiSolidUserX size={26} color="red"/>
           </button>  
              }
              
               </td>
            {/* <td>
            <ToggleBtn toggleHandler={toggleHandler} />
            </td> */}
</tr>

        ))

        }
     
    </tbody> 
    
  </table> 
</div>  
    
             
    
    
    </div>
  );
};

export default AllUsersTable;
