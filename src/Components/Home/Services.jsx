import { SiOpensearch } from "react-icons/si";
import { GrHostMaintenance } from "react-icons/gr";
import { PiWebhooksLogoBold } from "react-icons/pi";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
        id : 1,
      icon: SiOpensearch,
      title: "SEO", 
      desc: "Improve your site's search engine traffic and use INTELLEC IT for SEO, so you can expect a comprehensive and specialized solution designed for your company by experts that produces measurable results.",
    },
    {
      id : 2, 
    icon: PiWebhooksLogoBold,
    title: "Web Design and Development", 
    desc: "We design and develop websites that attract and retain visitors, improve conversion rates.Our web design and development team gives your company the greatest possible first impression with strategic thinking.",
  },
  {
    id : 3,
  icon: GrHostMaintenance,
  title: "Website Maintenance", 
  desc: "Creating a website may be a one-time activity but regular updation in the form of images, inventory, blogs, contents, etc is equally important to keep the users engaged. Intellec IT can help you to Maintenance websites.",
},
    
    
  ]
  // const {icon: Icon, title, desc} = services

  return (
    <div className="text-center space-y-2 mt-5 mb-3">
        <h1 className="text-xl font-bold">Our Services</h1>
        <h1 className=" font-bold text-2xl">Our digital marketing services for scalable and sustainable growth</h1>
        <p className="text-gray-400 youngSerif">Best digital marketing consultancy agency in new york.We provide digital <br/> marketing services with the intention to increase sales. <br/>Our recommendations will fulfill all our aims</p>
        
        

      <div className="grid md:max-w-[1100px] lg:grid-cols-3 mx-auto gap-8 justify-center items-center  ">
     {
      services.map(service => (
        <ServiceCard key={service.id} title={service.title} icon={service.icon}
        desc ={ service.desc}>
          
        </ServiceCard>

      )
        
      )
     } 
        </div></div>
        
    

  
  )
}

export default Services