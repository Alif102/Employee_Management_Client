import { useSearchParams } from "react-router-dom";
import { categories } from "./CategoriesData"
import CategoryBox from "./CategoryBox"

const Categories = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    console.log(category)
     
  return (
    <div className="md:mt-10 md:mb-3">
      <h1 className="text-xl md:text-center">Our Works</h1>
      <h1 className=" md:text-3xl md:text-center font-bold">RESULTS REVEAL THE- BEAUTY OF CREATIVITY.</h1>
      {/* <h1>CHOOSE CATEGORY:</h1> */}
    <div className="md:pt-4 md:mb-4 md:justify-center flex md:items-center overflow-x-auto">

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