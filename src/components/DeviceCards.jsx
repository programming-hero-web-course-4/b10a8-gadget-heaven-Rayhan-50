
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";


const DeviceCards = () => {
   
    const data = useLoaderData();
    const { category } = useParams();
    const [device, setDevice] = useState([]);

    useEffect(() => {
        if(category){
            const filteredByCategory = data.filter(device => device.category == category);
        setDevice(filteredByCategory);
        }else{
            setDevice(data)
        }
    }, [category, data]);

    
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {device.length === 0 ? (
                <p className="text-center text-xl font-semibold">No data available</p>
            ) : (
                device.map(device => (
                    <Card key={device.product_id} device={device} />
                ))
            )}
        </div>
        
      </>
    );
};

export default DeviceCards;
