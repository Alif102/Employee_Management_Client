const Testimonial = () => {
  const testimonials = [
    {
        id : 1,
        name:'John Smith',
        occ: 'Businesman',
      image: "         ",
      desc: "",
     
    },
    { id: 2,
      name:'Karley Quinn',
      occ: 'Tv Host',
      image: "",
      desc: ''
    },
    { id: 3,
      name:'Steve Williamson',
      occ: 'Player',
      image: "https://assets.cdn.filesafe.space/4f6En2kmrDyqEdKKD68i/media/64fef45993d7ebee28313df1.webp",
      desc:''
    }
  ]
  return (
    <div className=' max-w-[1100px] mx-auto mt-10 mb-10'>
      
<h1 className="text-3xl text-[#151875] font-bold mt-10 text-center">Our Testimonials</h1>
<h1 className="text-center robotoMono m-6">TESTIMONIALS <br/>
THAT MAKE US SMILE.</h1>
<div className="grid lg:grid-cols-3 max-w-[1100px] grid-cols-1 mx-auto gap-5 justify-center  ">


{
  testimonials.map ((testimonial) => {
      return (       

        <div key={testimonial.id} className="card w-[270px] bg-base-100 shadow-xl">
 <div className="card-body flex">
      <p>{testimonial.desc}</p>
      
    </div>
    <div className="stat ">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src={testimonial.image} />
        </div>
      </div>
    </div>
    <div className="stat-title">{testimonial.name}</div>
    <div className="stat-desc text-secondary">{testimonial.occ}</div>
  </div>
    
</div>

      )
  })
}
</div>
    </div>
  )
}

export default Testimonial