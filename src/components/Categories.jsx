import {  NavLink } from "react-router-dom";


const Categories = ({categories}) => {
    return (
        <div role="tablist" className="tabs tabs-boxed flex flex-col items-start w-52">
        
        {
            categories.map(category=><NavLink to={`/category/${category.category}`} key={category.category}  role="tab" className={({isActive})=>`tab  ${isActive?'tab-active':''}`}>{category.category}</NavLink>)
        }
      </div>
    );
};

export default Categories;