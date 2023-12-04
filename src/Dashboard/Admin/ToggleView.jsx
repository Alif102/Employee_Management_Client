import { useState } from "react";
import CardView from "./CardView";
import AllUsers from "./AllUsers";
 
const ToggleView = () => {
    const [isTableView, setIsTableView] = useState(true);

  const toggleView = () => {
    setIsTableView((prevState) => !prevState);
  };
  return (
    <div>
        <div>
      <button className="btn btn-info rounded-md  w-[200px] md:ml-16 mb-5" onClick={toggleView}>
        {isTableView ? 'Switch to Card Grid View' : 'Switch to Table View'}
      </button>
      {isTableView ? <AllUsers /> : <CardView />}
    </div>
    </div>
  )
}

export default ToggleView