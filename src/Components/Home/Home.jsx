 import Banner from "./Banner"
 import Footer from "./Footer"
import Categories from "../OurWork/Categories/Categories"
 import Work from "../OurWork/Work"
  import About from "./About"
 import Services from "./Services"
import Testimoniial from "./Testimoniial"

import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Home - Employee Management</title>
        <meta name="description" content="This is Home" />
      </Helmet>
      <Banner/> 
      <About></About> 
      <Services/>
      <Categories/>
      <Work/>
      
      <Testimoniial/>
      <Footer/>
      
      
       
    </div>
  )
}

export default Home
// mern\employee\frontend