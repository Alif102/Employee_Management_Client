/* eslint-disable react/prop-types */

const ToggleBtn = ({toggleHandler}) => {
  return (
    <div>
        <label htmlFor="Toggle3"
        className="i inline-flex w-full rounded-md">
            <input onChange={toggleHandler} id="Toggle3" type="checkbox" className="h hidden peer ">
            </input>
            <span className=" px-4 py-1 rounded-1-md bg-sky-500 peer-checked:bg-red-400">
              HR
            </span>
            <span className=" px-4 py-1 rounded-1-md bg-red-400 peer-checked:bg-sky-500">
              Employee
            </span>
        
        </label>
    </div>
  )
}

export default ToggleBtn