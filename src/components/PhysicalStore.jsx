import React from "react";

const PhysicalStore = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Visit Our Physical Store</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div>
          <img
            src="/path/to/store-image.jpg"
            alt="Physical Store"
            className="w-full rounded-md shadow-md"
          />
        </div>
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <p className="text-lg mb-4">
            Discover our brick-and-mortar store where you can find the freshest
            coconuts and more!
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            condimentum tortor vitae est iaculis, nec scelerisque lacus pretium.
            Aliquam erat volutpat. Vestibulum et tellus et velit maximus
            fermentum in sit amet nibh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhysicalStore;
