import img from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="text-center space-y-10 py-5">
                <h1 className="text-7xl font-semibold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className="text-xl">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className='p-5 border border-gray-200 w-1/2  mx-auto'>
              
               <img className='w-full' src={img} alt="" />
               
            </div>
            <p className='text-3xl font-semibold py-10 text-center'>Explore Cutting-Edge Gadgets</p>
        </div>
    );
};

export default Banner;