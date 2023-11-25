/* eslint-disable react/prop-types */
const Cards = ({room}) => {
  return (

<div  className="card w-96 bg-base-100 group shadow-xl">
  <figure><img className='group-hover:scale-110 transition' src={room.image} alt="Shoes" /></figure>
  <h2>{room.category}</h2>
  <h1>{room.title}</h1>
</div>
  )
}

export default Cards