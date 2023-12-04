/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'


const EmployeTable = ({employees, handleClick}) => {


 

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
        <div className="overflow-x-auto md:max-w-[1100px] md:mx-auto">
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


<tr key={employee._id}>

        <td>
    <div className="avatar">
      <div className="mask mask-squircle w-12 h-12">
        <img src={employee?.photo} alt="Avatar Tailwind CSS Component" />
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
 
            
            
<td>{employee.bank}</td>
<td>{employee.salary}</td>
<th>
 <Link to={`/detail/${employee._id}`} >  <button className="btn btn-ghost btn-xs">details</button>

 </Link> 
</th>

 

<td>
                {
                  employee.isVerified === 'false' ? <button onClick={()=> handleClick(true,employee?._id)}>Not Verified</button> : <button onClick={()=> handleClick(false, employee?._id)}>Verified</button>
                }
                {/* <p> <button onClick={handleToggleStatus}>{isToggleOn ? 'Not Verified ❌' : 'Verified ✅'}  </button> </p> */}

                
             
            </td>
            <th>
{employee.isVerified === "false" ? (
                 <button className='btn btn-disabled btn-xs' disabled="disabled"  >Pay</button>
                ) : (
                // <button  className='btn btn-success btn-xs'> Pay</button>
               <div>
               <button className="btn btn-success btn-xs" onClick={()=>document.getElementById('my_modal_1').showModal()}>Pay</button>
<dialog id="my_modal_1" className="modal">
<div className="modal-box">
<div className="flex space-x-4">
 
  <div className="flex-1">
    <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
    <div className="mt-1">
      <input type="number" id="salary" defaultValue={employee?.salary} name="salary" className="input" placeholder='salary'/>
    </div>
  </div>

 
  <div className="flex-1">
    <label htmlFor="month" className="block text-sm font-medium text-gray-700">Month</label>
    <div className="mt-1">
      <select id="month" name="month" className="select input input-bordered">
       
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">Aug</option>
        <option value="9">Sep</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
       
      </select>
    </div>
  </div>

  
  <div className="flex-1">
    <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
    <div className="mt-1">
      <input type="text" id="year" name="year" className="input input-bordered" placeholder="Enter year" />
    </div>
  </div>
</div>
<div>
  <button className='btn btn-info btn-xs ' onClick={()=>
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your Payment has been saved",
    showConfirmButton: false,
    timer: 1500
  })
  }>Pay</button>
</div>
<div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>



</div>

</dialog> </div>
              )}

</th>
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



{/* <div>
     <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Pay</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">

  <div className="flex space-x-4">
 
  <div className="flex-1">
    <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
    <div className="mt-1">
      <input type="text" id="salary" name="salary" className="input" placeholder="Enter salary" />
    </div>
  </div>

 
  <div className="flex-1">
    <label htmlFor="month" className="block text-sm font-medium text-gray-700">Month</label>
    <div className="mt-1">
      <select id="month" name="month" className="select">
       
        <option value="1">January</option>
        <option value="2">February</option>
       
      </select>
    </div>
  </div>

  
  <div className="flex-1">
    <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
    <div className="mt-1">
      <input type="text" id="year" name="year" className="input" placeholder="Enter year" />
    </div>
  </div>
</div>



    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog> 
</div> */}