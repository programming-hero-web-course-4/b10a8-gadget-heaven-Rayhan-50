import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import  { Toaster } from 'react-hot-toast';




const MainLayout = () => {

    return (
      
             <div>
            <Toaster></Toaster>
           <div className="h-24">
           <Navbar></Navbar>
           </div>
            <div className="min-h-[calc(100vh-260px)] py-12">
         <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
        
       
    );
};

export default MainLayout;






