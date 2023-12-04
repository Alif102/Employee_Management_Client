/* eslint-disable react/prop-types */
import { FaArrowCircleRight } from "react-icons/fa";

const ServiceCard = ({icon : Icon , title, desc}) => {
  return (
    <div>
        
        <div className=" mt-6 space-y-4">
          <h1 className=" rounded-md ml-40 "><Icon size={31} color='red'/></h1>
          <h1 className="text-2xl youngSerif ">{title}</h1>
          <h1 className=" text-gray-500">{desc}</h1>
          <div className="card-actions">
      <button className="btn hover:p-2 bg-orange-400 md:ml-24">Start Now <FaArrowCircleRight size={24} /></button>
    </div>

          </div>
    </div>
  )
}

export default ServiceCard