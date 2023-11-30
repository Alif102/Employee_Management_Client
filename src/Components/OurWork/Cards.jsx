/* eslint-disable react/prop-types */
import { FaEye } from "react-icons/fa";
const Cards = ({room}) => {
  return (

<div  className="card w-96 bg-base-100 text-center group shadow-xl">
  <figure><img className='group-hover:scale-110 transition' src={room.image} alt="Shoes" /></figure>
  <h2 className=" text-gray-500 font-bold ">{room.category}</h2>
  <h1 className="text-2xl font-bold">{room.title}</h1>
  <button className="btn bg-orange-400 ">Watch Live <FaEye size={18}/></button>
</div>
  )
}

export default Cards