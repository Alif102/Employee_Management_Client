/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { BiSolidUserX } from "react-icons/bi";

const CardViewCard = ({ employees, toggle, setToggle, handleClick }) => {
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
    <div>
                      <h1 className='max-w-[1100px] mx-auto text-center bg-cyan-200 p-6 font-bold text-2xl'>All Verified Employee & HR </h1>

    <div className="grid grid-cols-1 max-w-[1100px] gap-6 md:grid-cols-2 mx-auto mt-9">

       {
        filteredData.map(employee => (
            <div  key={employee._id}>
                <div >
                       <div className="card w-[400px] bg-base-100 shadow-xl" key={employee._id}>
                
                <div className="card-body flex gap-3">
                 <div className="flex gap-5">
                 <h2 className="card-title">Name : {employee.name}</h2>
                  <h1 className=" space-x-3"> Status :
                    {
                   employee.isVerified === "true" ? <button className='btn btn-info btn-xs'>Verified</button> : "Verified"
                }
                    </h1>
                 </div>
                  <p>Designation : <span className=" font-bold"> {employee.designation}</span></p>
                  <div className="card-actions flex gap-4 items-center mt-5">
                    
                    <h1> <span className="text-gray-500 space-x-2"> Make HR :</span>
                    {
                  employee.role === 'employee' ? <button className='btn btn-info' onClick={()=> handleClick("hr",employee?._id)}>Employee</button> : <button className='btn btn-success' onClick={()=> handleClick("employee", employee?._id)}>HR</button>
                }

                    </h1>

                    <h1> Fired :
                    {
                employee?.isFired ? "Fired" : 
                <button className=' cursor-pointer' onClick={()=> handleFired(employee._id)}>
                
             <button className="btn "> <BiSolidUserX size={26} color="red"/>
                </button>   
           </button>  
              }
                    </h1>
                    </div>
                      
                   
                  </div>
                </div> 
            
            </div>
            </div>
        ))
       }

         </div>
</div>

        
        




  )
}

export default CardViewCard