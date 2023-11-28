import { useEffect, useState } from 'react';
import EmployeeTable from './EmployeeTable';

const EmployeeData = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('/employees.json')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const updateEmployeeStatus = (index, verified) => {
    fetch(`/employees/${index}`, {
      method: 'PUT',
       headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ verified }),
    })
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error updating status:', error));
  };

  return (
    <div>
      <h1>Employee Information</h1>
      <EmployeeTable employees={employees} updateEmployeeStatus={updateEmployeeStatus} />
    </div>
  );
};

export default EmployeeData;
