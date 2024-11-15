import { MdDelete } from "react-icons/md";
const DashCard = ({ device ,isWishlist}) => {
    const { rating, availability, specification, description, price, product_image, product_title, product_id } = device;

    return (
        <div >
<div className="flex justify-center items-center gap-5 p-5 bg-white shadow-xl ">
    <div>
        <img className="w-40" src={product_image} alt="" />
    </div>
    <div className="space-y-2">
        <h1 className="text-2xl font-semibold">{product_title}</h1>
        <p>{description}</p>
        <p>Price:{price}</p>
        {isWishlist && (
        <button className="btn btn-primary mt-2">Add to card</button>
      )}
    </div>
    <div className="text-red-600 text-3xl">
    <MdDelete />
    </div>
</div>

        </div>
    );
};

export default DashCard;



