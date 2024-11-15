import { Link } from "react-router-dom";


const Card = ({device}) => {
    const { rating,availability,specification,description,price,category,product_image,product_title,product_id} =device ||{}
    return (
        <div className="card card-compact bg-base-100 p-5  shadow-xl">
  <figure>
    <img className="w-40"
      src={product_image}
      alt="Shoes" />
  </figure>
  <div className="space-y-5">
    <h2 className="text-3xl font-semibold">{product_title}</h2>
    <p className="text-xl"><span className="font-semibold">Price:</span>{price} k</p>
   <div className="flex justify-center items-center">
   <Link to={`/device/${product_id}`} ><button className="btn btn-outline btn-accent">View Details</button></Link>
   </div>
  </div>
</div>
    );
};

export default Card;