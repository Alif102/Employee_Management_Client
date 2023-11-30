/* eslint-disable react/prop-types */
// import  { useState } from 'react';

import ToggleBtn from "../../Shared/ToggleBtn";

import { BiSolidUserX } from "react-icons/bi";

const AllUsersTable = ({ employees }) => {
  
    
  console.log(employees)
  
const toggleHandler = event => {
    setToggle(event.target.checked);
  }
  
   
  //  const handleToggleStatus = () => {
  //   setToggleOn(!isToggleOn);
  // };
  
  //   const [isToggleOn, setToggleOn] = useState("❌");

  return (

    <div className=" max-w-[1100px] mx-auto">
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
    <tbody>
        { employees.map((employee) => (


<tr key={employee.email}>

        
<td>
      <div className="font-bold">{employee.name}</div>
</td>
<td>
  {employee.designation}
</td>
<td>
<ToggleBtn toggleHandler={toggleHandler} />

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
                  employee.isVerified === 'false' ?  'Verified ✅' : 'Not Verified ❌' 
                }
                {/* <p> <button onClick={handleToggleStatus}>{isToggleOn ? 'Not Verified ❌' : 'Verified ✅'}  </button> </p> */}

                
             
            </td>
            <td>
              <BiSolidUserX size={26} color="red"/>
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
