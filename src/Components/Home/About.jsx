
import { FaArrowCircleRight } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
const About = () => {
  return (
    <div>
       

        <div className="p-10 bg-gray-800 text-gray-100">
          <div className="text-center mb-6">
          <h1 className="text-2xl">About Us</h1>
        <h1 className="">AT FAHIM CODE, WE BELIEVE IN THE TRANSFORMATIVE POWER OF TECHNOLOGY.</h1>
        
          </div>
  <div className="flex gap-12 max-w-[1100px] mx-auto flex-col flex-1 lg:flex-row">
    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
       {/* <h1 className="text-5xl font-bold">Box Office News!</h1> */}
      <p className="py-6">
      <span className="text-3xl">OUR STORY</span> Founded in 2018, we have dedicated ourselves to harnessing <br/> the potential of the digital domain. Our team of passionate developers and designers <br/> work tirelessly to bring your ideas to life, ensuring they not only meet but exceed your expectations.        
    </p>

    <p className="py-6">
      <span className="text-3xl">OUR MISSION</span> We are empowering businesses and individuals by creating <br/> state-of-the-art digital solutions. We are more than just developers; we are partners in your digital journey.
    </p>
      
      <button className="btn bg-orange-400">Contact Us <FaArrowCircleRight/></button>
   <div className="flex gap-5 mt-5 ">
    <h1 className="flex "><span><TiTickOutline/></span> 05+ Years </h1>
    <h1 className="flex "><span><TiTickOutline/></span> 50+ Clients </h1>

    <h1 className="flex "><span><TiTickOutline/></span> 100+ MILLION RAISED </h1>
   </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About







