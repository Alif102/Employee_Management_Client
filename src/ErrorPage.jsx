import { Link } from "react-router-dom"
 
const ErrorPage = () => {

  return (
    <div className="text-center mt-11">
      {/* <div>
React-Projects\coffee-store-server\Coffe-Server-backend
React-Projects\coffee-store-server\Coffe-store-frontend
      </div> */}
      <h2>ErrorPage</h2>
      <Link to="/"><button className="btn m-5 btn-accent">Go Home</button></Link>
    </div>
  )  
} 

export default ErrorPage



