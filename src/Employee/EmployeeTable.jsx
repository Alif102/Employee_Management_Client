/* eslint-disable react/prop-types */
// import  { useState } from 'react';

import { useState } from "react";


const EmployeeTable = ({ employees }) => {
    
  console.log(employees)
  
  const [isToggleOn, setToggleOn] = useState("❌");

  // Function to toggle the state
 
  const toggleState = () => {
    setToggleOn(!isToggleOn);
  };

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Verified</th>
          <th>Bank Account</th>
          <th>Salary</th>
          <th>Pay</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            {/* <td>
            {!employee.verified ? (
                <button onClick={() => handleToggleStatus(index)}>❌</button>
              ) : (
                <button onClick={() => handleToggleStatus(index)}>✅</button>
              )}
            </td> */}
            
             <td>
                
                <p> <button onClick={toggleState}>Verified  </button>{isToggleOn ? '❌' : '✅'} </p>

                
             
            </td>
            <td>{employee.bankAccount}</td>
            <td>{employee.salary}</td>
            <td>{employee.pay}</td>
            <td>{employee.details}</td>
          </tr>
        ))}
      </tbody>
      
    </table>
    
    
    </div>
  );
};

export default EmployeeTable;
