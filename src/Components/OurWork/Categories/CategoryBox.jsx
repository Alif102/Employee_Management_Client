/* eslint-disable react/prop-types */
 import qs from 'query-string'
import { useNavigate, useSearchParams } from 'react-router-dom';

const CategoryBox = ({label, icon: Icon ,selected }) => {
  const navigate = useNavigate();
    const [params,setParams] = useSearchParams();
    const handleClick = ()=> {
      let currentQuery = {}
      if(params){
          currentQuery = qs.parse(params.toString())
           const updateQuery = {...currentQuery, category: label}
          const url = qs.stringifyUrl ({
              url: '/',
              query: updateQuery

          })
          navigate(url)
      }
  }
   params.get('category')

    
    
    
 
  return (
    <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-3 p-3 border-b-2 hover:text-neutral-800
     cursor-pointer ${selected ? 'border-b-neutral-800 text-neutral-800' : ''}`}>
      <Icon size={26}/>
        <div className="text-md font-medium">{label}</div>
    </div>
  )
}

export default CategoryBox


