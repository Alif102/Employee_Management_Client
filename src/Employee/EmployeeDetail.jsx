/* eslint-disable react/prop-types */

import { Helmet } from "react-helmet"


const EmployeeDetail = ({details}) => {
    // const {photo, name, designation} = details
    console.log(details)
  return (
    <div>
      <Helmet>
        <title>Dashboard - Employee Detail</title>
        <meta name="description" content="This is Home" />
      </Helmet>
        <h1 className="youngSerif text-3xl mb-8 text-center m-10">Employee Detail</h1>
        <div className="flex items-center mt-10 justify-center gap-8">
        <img className="w-[300px] rounded-md" src={details.photo} alt="img" />
        <div>
            <h1>Employee Name : <span className="text-xl font-bold youngSerif">{details.name}</span></h1>
            <h1 >Designation : <span className=" text-gray-600">{details.designation}</span> </h1>
          
        </div>
        </div>
        
    </div>
  )
}

export default EmployeeDetail