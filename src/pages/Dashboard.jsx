
import { useEffect, useState } from "react";
import { getAllFavorites, getAllWishlist } from "../utils";

import DashCard from "../components/DashCard";

const Dashboard = () => {
  const [favorites, setFavorites] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);

  useEffect(() => {
    const favoritesData = getAllFavorites();
    const wishlistData = getAllWishlist();
    setFavorites(favoritesData);
    setWishlist(wishlistData);
  }, []);

  const handleViewToggle = (view) => {
    setShowWishlist(view === "wishlist");
  };

  const handleSortByPrice = () => {
    const sortedFavorites = [...favorites].sort(
      (a, b) => b.price - a.price
    );
    setFavorites(sortedFavorites);
  };

  const devicesToShow = showWishlist ? wishlist : favorites;

  return (
    <div>
      
      <div className="text-center bg-blue-600 py-10 shadow text-white">
        <h1 className="text-5xl font-semibold pb-5">Dashboard</h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="flex gap-5 justify-center items-center pt-5">
          <button
            className={`btn ${!showWishlist ? "btn-primary" : ""}`}
            onClick={() => handleViewToggle("favorites")}
          >
            Cart
          </button>
          <button
            className={`btn btn-outline btn-error ${showWishlist ? "btn-primary" : ""}`}
            onClick={() => handleViewToggle("wishlist")}
          >
            Wishlist
          </button>
        </div>
      </div>

      {!showWishlist && (
        <div className="flex justify-between px-5 py-3 my-3 bg-gray-100 shadow-md">
          <p className="text-xl font-semibold">Cart</p>
          <div className="flex justify-between gap-3">
            <p className="text-3xl font-semibold">Total cost: 999.99</p>
            <button className="btn" onClick={handleSortByPrice}>
              Sort by Price
            </button>
            <button className="btn btn-success">Purchase</button>
          </div>
        </div>
      )}

      
      {showWishlist && (
        <div className="px-5 py-3 my-3 bg-gray-100 shadow-md">
          <p className="text-xl font-semibold">Wishlist</p>
        </div>
      )}

      
      <div className="flex flex-col gap-10 items-center">
        {devicesToShow.length === 0 ? (
          <p className="text-center text-xl font-semibold">No data available</p>
        ) : (
          devicesToShow.map((device) => (
            <DashCard
              isWishlist={showWishlist}
              key={device.product_id}
              device={device}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;

