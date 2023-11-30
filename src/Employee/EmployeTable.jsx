/* eslint-disable react/prop-types */


const EmployeTable = ({employees}) => {

  //   For verified/not verified menu item toggle button
  // const toggleHandler = event => {
  //   setToggle(event.target.checked)
  // }
   // Function to toggle the state
   
  //  const handleToggleStatus = () => {
  //   setToggleOn(!isToggleOn);
  // };
  
    // const [isToggleOn, setToggleOn] = useState("❌");

   
  
  return (
    <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th>Photo</th>
        <th>Name</th>
        <th>Designation</th>
        <th>Email</th>
        <th>Bank Account No.</th>
        <th>Salary</th>
        <th></th>
        <th>Status</th>

      </tr>
    </thead>
    <tbody>
        { employees.map((employee) => (


<tr key={employee.email}>

        <td>
    <div className="avatar">
      <div className="mask mask-squircle w-12 h-12">
        <img src={employee.photo} alt="Avatar Tailwind CSS Component" />
      </div>
    </div>
    <div>
    </div>

        </td>
<td>
      <div className="font-bold">{employee.name}</div>
</td>
<td>
  {employee.designation}
</td>
<td>{employee.email}</td>
 {/*  <td>
             {!employee.verified ? (
                <button onClick={() => handleToggleStatus(index)}>Not Verified ❌</button>
              ) : (
                <button onClick={() => handleToggleStatus(index)}>Verified ✅</button>
              )}
            </td>  */}
            
            
<td>{employee.bank}</td>
<td>{employee.salary}</td>
<th>
  <button className="btn btn-ghost btn-xs">details</button>
</th>
<td>
                {
                  employee.isVerified === 'false' ? 'Not Verified ❌' : 'Verified ✅'
                }
                {/* <p> <button onClick={handleToggleStatus}>{isToggleOn ? 'Not Verified ❌' : 'Verified ✅'}  </button> </p> */}

                
             
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
  )
}

export default EmployeTable