import { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { addFavorites, addWishlist, getAllFavorites, getAllWishlist } from "../utils";


const CardDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [device, setDevice] = useState(null);
    const [isFavorite ,setIsFavorite]=useState(false)
    const [isWishlist ,setWishlist] =useState(false)
    useEffect(() => {
      const singleData = data.find((device) => device.product_id === id);
      setDevice(singleData);
      const favorites =getAllFavorites()
      const isExist =favorites.find(item =>item.product_id ==singleData.product_id)
      if(isExist){
        setIsFavorite(true)
      }
     const wishlist=getAllWishlist()
      const isExistWishlist =wishlist.find(item =>item.product_id ==singleData.product_id)
      if(isExistWishlist){
        setWishlist(true)
      }
      
    }, [data, id]);


const handleFavorite =(device)=>{
  addFavorites(device)
  setIsFavorite(true)
 
}

const handleWishlist =(device)=>{
  addWishlist(device)
   setWishlist(device)
}
  
    return (
        <div>
            
            <div className="text-center bg-blue-600 py-10 shadow text-white">
                <h1 className="text-5xl font-semibold pb-5">Product Details</h1>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            
            <div className="flex bg-white shadow-xl rounded-xl gap-10 w-4/5 p-5">
           <div className="w-64">
           <img src={device?.product_image} alt="" />
           </div>
            <div>
                <h1 className="text-4xl font-semibold">{device?.product_title}</h1>
                <p>Price :{device?.price}</p>
                {device?.availability && <button className="btn btn-outline btn-accent ">In Stock</button>}
                <p>{device?.description}</p>
                <h1>Specification:</h1>
                <li>{device?.specification[0]}</li>
                <li>{device?.specification[1]}</li>
                <li>{device?.specification[2]}</li>
                <h1>Rating:  {device?.rating} </h1>
                <div className=" flex gap-5">
                <button disabled={isFavorite} onClick={()=>handleFavorite(device)}  className="flex items-center gap-2 btn btn-outline btn-primary">Add To Card <CiShoppingCart /></button>
                <button disabled={isWishlist} onClick={()=>handleWishlist(device)} className=" btn btn-outline btn-primary"><GiSelfLove /></button>
                </div>
            </div>
            </div>    
    
            </div>

    );
};

export default CardDetails;


