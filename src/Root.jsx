import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css';
import Navbar from '../src/Components/Navbar/Navbar'
const Root = () => {
  return (
    <div>
      <Navbar/>
      <Toaster/>
      <Outlet/>
    </div>
  )
}

export default Root