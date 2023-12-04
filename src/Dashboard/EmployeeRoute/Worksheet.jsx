import { useState } from "react";
import DatePicker from 'react-datepicker'
// import Swal from 'sweetalert2'
import WorksheetTable from "./WorksheetTable";
import axios from "axios";

const Worksheet = () => {
  const [update, setUpdate] = useState(true);

    const [task, setTask] = useState('');
    const [hoursWorked, setHoursWorked] = useState(0);
    const [date, setDate] = useState(new Date());

    
  
    const handleTaskChange = (e) => {
      setTask(e.target.value);
    };
  
    const handleHoursChange = (e) => {
      setHoursWorked(e.target.value);
    };
  
    const handleDateChange = (selectedDate) => {
      setDate(selectedDate);
    };
    const formData = {task, hoursWorked, date}
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData)

      axios.post('http://localhost:5000/works', formData)
      .then(()=>{
        setUpdate(!update)
      })


      // Process the form data here, e.g., send it to an API or perform actions
      // console.log('Task:', task);
      // console.log('Hours Worked:', hoursWorked);
      // console.log('Date:', date);
      // You can perform further actions like sending data to a server, etc.
      // fetch('http://localhost:5000/work', {
      //   method: 'POST',
      //   headers:{
      //     'content-type': 'application/json'
      //   }, 
      //   body : 
      //     JSON.stringify(formData)  
      // })
      // .then(res => res.json())
      // .then(data => {
      //   console.log(data);
      //   if(data.insertedId){
      //     Swal.fire({
      //       title: 'Success!',
      //       text: 'Work Added Successfully',
      //       icon: 'success',
      //       confirmButtonText: 'Cool'
      //     })
      //   }
      // })
      // You can handle form submission logic here, e.g., sending data to the server.
      console.log('Form data submitted:', formData);
    };
  return (
    <div>

      <div className=" bg-gray-200 m-10 p-10 ">
      <WorksheetTable update={update} setUpdate={setUpdate} />
      </div>
      
       <form className="card-body space-y-4" onSubmit={handleSubmit}>
      <label>
        Tasks:
        <select value={task} onChange={handleTaskChange}>
          <option value="Sales">Sales</option>
          <option value="Support">Support</option>
          <option value="Content">Content</option>
          <option value="Paper-work">Paper-work</option>
          {/* Add more options here if needed */}
        </select>
      </label>
      <label>
        Hours Worked:
        <input className="input input-bordered" type="number" value={hoursWorked} onChange={handleHoursChange} />
      </label>
      <label>
        Date:
        <DatePicker selected={date} onChange={handleDateChange} />
      </label>
      <button type="submit">Add / Submit</button>
    </form>

   
  


    </div>
  )
}

export default Worksheet