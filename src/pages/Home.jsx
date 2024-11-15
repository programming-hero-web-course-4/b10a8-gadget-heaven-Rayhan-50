import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";


const Home = () => {
    const categories =useLoaderData()
    console.log(categories);
    return (
        <div>
            <Banner></Banner>
            
            <div className="flex gap-10 justify-center mx-10">
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Home;