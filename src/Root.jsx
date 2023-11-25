import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Navbar from "./Components/Navbar"
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css';

const Root = () => {
  return (
    <div>
      <Toaster/>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Root