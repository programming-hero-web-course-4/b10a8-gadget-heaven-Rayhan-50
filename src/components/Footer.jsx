

const Footer = () => {
    return (

        <footer className=" bg-slate-300  p-10">
          <div className="text-center py-3">
            <h1 className="text-4xl font-semibold">Gadget Heaven</h1>
            <p className="py-2">Leading the way in cutting-edge technology and innovation.</p>
          </div>
          <div className="flex justify-center gap-40 pt-10">
            <div>
              <h1 className="text-2xl font-semibold pb-3">Services</h1>
              <p>Product Support</p>
              <p>Order Tracking</p>
              <p>Shipping & Delivery</p>
              <p>Returns</p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold pb-3">Company</h1>
              <p>About Us</p>
              <p>Carrers</p>
              <p>Contact</p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold pb-3">Legal</h1>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
       
      </footer>
    );
};




export default Footer;