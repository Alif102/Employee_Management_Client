/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const WorksheetTable = ({update}) => {

    const [works, setWork] = useState([]);



    useEffect(()=> { 
        fetch('http://localhost:5000/works')
        .then((res)=> res.json())
        .then((data)=> setWork(data))
        .catch(error => console.error(error))
    },[update])
  return (



<div className=" max-w-[1100px] mx-auto">
        <div >
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Tasks</th>
        <th>Works</th>
        <th> Date</th>
        

      </tr>
    </thead>
    <tbody>
    {
        works.map(work=> (
            <tr key={work._id}>
                <td>
                    {work.task}
                </td>
                <td>
                    {work.hoursWorked}
                </td>
                <td>
                    {work.date}
                </td>

            </tr>
        ))
    } </tbody>

   
    

    </table>


        </div>

    </div>
  )
}

export default WorksheetTable