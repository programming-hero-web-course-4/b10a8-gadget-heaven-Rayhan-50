

const Notice = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="warranty-section bg-white shadow-lg p-6 rounded-lg border border-gray-200 max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-blue-600">Guarantee & Warranty</h2>
          <p className="text-gray-700 mt-2">
            Every product is backed by our quality assurance commitment. Below are the details:
          </p>
      
          <div className="mt-4 flex items-center">
            <span className="material-icons text-blue-600">verified</span>
            <h3 className="font-bold text-lg ml-2">Guarantee:</h3>
          </div>
          <p className="text-gray-600 ml-6">
            - 30-day satisfaction guarantee: If you're not happy with your purchase, return it for a full refund or replacement.
          </p>
      
          <div className="mt-4 flex items-center">
            <span className="material-icons text-blue-600">build</span>
            <h3 className="font-bold text-lg ml-2">Warranty:</h3>
          </div>
          <p className="text-gray-600 ml-6">
            - 1-year manufacturer warranty covering manufacturing defects.<br />
            - Extended warranty available for an additional fee (optional).
          </p>
      
          <a 
  href="https://www.electronics.com.bd/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="btn bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mt-4"
>
  Learn More
</a>

        </div>
      </div>
      
    );
};

export default Notice;