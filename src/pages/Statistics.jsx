
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        "product_id": "P001",
        "product_title": "Apple iPhone 15 Pro Max",
        "product_image": "https://i5.walmartimages.com/seo/Restored-Apple-iPhone-15-Pro-Max-256GB-Cricket-Wireless-Blue-Titanium-MU693LL-A-Excellent-Condition_dd2d42c6-cc25-4bee-81ef-7847120498d5.663475b807d168a41e9082d258d9c7ce.jpeg",
        "category": "iPhone",
        "price": 1299,
        "description": "Experience the ultimate smartphone with the iPhone 15 Pro Max.",
        "specification": [
            "6.7-inch Super Retina XDR display",
            "A17 Bionic chip",
            "Triple-camera system (48MP Main, 12MP Telephoto, 12MP Ultrawide)",
            "LiDAR Scanner",
            "Up to 2TB storage"
        ],
        "availability": true,
        "rating": 4.8
    },
    {
        "product_id": "P002",
        "product_title": "Samsung Galaxy S23 Ultra",
        "product_image": "https://img.drz.lazcdn.com/static/bd/p/4581c5b81113b770fd2d1d92447bcb99.jpg_720x720q80.jpg",
        "category": "Phone",
        "price": 1199,
        "description": "Discover the power and elegance of the Samsung Galaxy S23 Ultra.",
        "specification": [
            "6.8-inch Dynamic AMOLED 2X display",
            "Snapdragon 8 Gen 2 processor",
            "Quad-camera system (200MP Main, 10MP Periscope Telephoto, 10MP Telephoto, 12MP Ultrawide)",
            "5000mAh battery",
            "Up to 1TB storage"
        ],
        "availability": false,
        "rating": 4.7
    },
    {
        "product_id": "P003",
        "product_title": "Sony WH-1000XM5",
        "product_image": "https://assets.entrepreneur.com/content/3x2/2000/1717744762-Sonyheadphonescolors.jpg",
        "category": "Accessories",
        "price": 399,
        "description": "Noise-cancelling wireless headphones with superior sound quality.",
        "specification": [
            "30 hours of battery life",
            "Active Noise Cancelling",
            "Touch sensor controls",
            "Quick Attention Mode",
            "Alexa and Google Assistant support"
        ],
        "availability": true,
        "rating": 4.6
    },
    {
        "product_id": "P004",
        "product_title": "Dell XPS 15",
        "product_image": "https://www.startech.com.bd/image/cache/catalog/laptop/dell/xps-15-9510/xps-15-9510-01-500x500.jpg",
        "category": "Laptop",
        "price": 1999,
        "description": "High-performance laptop with stunning display and powerful internals.",
        "specification": [
            "15.6-inch 4K UHD display",
            "Intel Core i7 12th Gen",
            "NVIDIA GeForce RTX 3050",
            "16GB RAM, 512GB SSD",
            "Up to 13 hours of battery life"
        ],
        "availability": true,
        "rating": 4.5
    },
    {
        "product_id": "P005",
        "product_title": "Apple Watch Series 9",
        "product_image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-45-stainless-gold-sport-band-clay-s9?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1709329401415",
        "category": "Smart Watch",
        "price": 429,
        "description": "Smartwatch with advanced health features and faster performance.",
        "specification": [
            "Always-On Retina display",
            "Blood oxygen and ECG apps",
            "S9 processor",
            "Swimproof",
            "Up to 18 hours of battery life"
        ],
        "availability": true,
        "rating": 4.8
    },
    {
        "product_id": "P006",
        "product_title": "Amazon Echo Dot (5th Gen)",
        "product_image": "https://extremegadgets.com.bd/wp-content/uploads/2024/08/51OiVQzj4HL._AC_SY1000_.jpg",
        "category": "Accessories",
        "price": 49,
        "description": "Compact smart speaker with Alexa voice assistant.",
        "specification": [
            "Compact design",
            "Improved sound quality",
            "Alexa built-in",
            "Supports smart home devices",
            "Voice control for music and more"
        ],
        "availability": true,
        "rating": 4.4
    },
    {
        "product_id": "P007",
        "product_title": "Nikon Z6 II",
        "product_image": "https://www.pqs.com.bd/image/cache/catalog/mirrorless-camera/nikon/z6-ii/z6-ii-02-500x500.jpg",
        "category": "Accessories",
        "price": 1999,
        "description": "Versatile mirrorless camera for photo and video professionals.",
        "specification": [
            "24.5MP full-frame sensor",
            "4K UHD video recording",
            "273-point autofocus system",
            "Dual EXPEED 6 processors",
            "Weather-sealed body"
        ],
        "availability": false,
        "rating": 4.7
    },
    {
        "product_id": "P008",
        "product_title": "GoPro HERO12 Black",
        "product_image": "https://media.wired.com/photos/653acaab8ccf6086f40686d4/1:1/w_1352,h_1352,c_limit/GoPro-Hero-12-Featured-Gear.jpg",
        "category": "Accessories",
        "price": 399,
        "description": "Waterproof action camera for all adventures.",
        "specification": [
            "5.3K video recording at 60fps",
            "HyperSmooth stabilization",
            "Waterproof up to 33ft",
            "Touch screen",
            "Live streaming capabilities"
        ],
        "availability": true,
        "rating": 4.5
    },
    {
        "product_id": "P009",
        "product_title": "Samsung QN90B Neo QLED TV",
        "product_image": "https://cdn.mos.cms.futurecdn.net/7dAGkezPdQUbCYesWUJAR9.jpg",
        "category": "Accessories",
        "price": 1499,
        "description": "Premium 4K TV with Quantum Matrix Technology.",
        "specification": [
            "4K UHD resolution",
            "Quantum HDR 32X",
            "Neo Quantum Processor 4K",
            "Anti-reflection screen",
            "Dolby Atmos and Object Tracking Sound+"
        ],
        "availability": true,
        "rating": 4.9
    },
    {
        "product_id": "P010",
        "product_title": "Microsoft Surface Laptop 5",
        "product_image": "https://m.media-amazon.com/images/I/51Lyq1XHmyL._AC_SL1500_.jpg",
        "category": "Laptop",
        "price": 1299,
        "description": "Stylish laptop with a sleek design and powerful performance.",
        "specification": [
            "13.5-inch PixelSense display",
            "Intel Core i5 12th Gen",
            "8GB RAM, 256GB SSD",
            "Up to 18 hours of battery life",
            "Windows 11"
        ],
        "availability": true,
        "rating": 4.6
    }
];

const Statistics = () => {
    return (
        <div>
            <div className="text-center bg-blue-600 py-10 shadow text-white">
                <h1 className="text-5xl font-semibold pb-5">Statistics</h1>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className="px-5 py-3 my-3 bg-gray-100 shadow-md">
                <p className="text-xl font-semibold">Statistics</p>
            </div>

            
            <div style={{ width: '100%', height: 400 }}>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="product_title" angle={-30} textAnchor="end" height={100} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
