import { useSearchParams } from "react-router-dom";
import { categories } from "./CategoriesData"
import CategoryBox from "./CategoryBox"

const Categories = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    console.log(category)
     
  return (
    <div className="mt-10 mb-3">
      <h1 className="text-xl text-center">Our Works</h1>
      <h1 className=" text-3xl text-center font-bold">RESULTS REVEAL THE- BEAUTY OF CREATIVITY.</h1>
      {/* <h1>CHOOSE CATEGORY:</h1> */}
    <div className="pt-4 mb-4 justify-center flex items-center overflow-x-auto">

        {categories.map(item => (
            <CategoryBox key={item.label} label={item.label}
              selected ={category === item.label} 
            icon={item.icon}></CategoryBox>
        ))}
    </div>
    </div>
  )
}

export default Categories