import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppShare = ({ phoneNumber, formData, product, onClick }) => {
  const generateWhatsAppMessage = () => {
    const message =
      `Hello, I am interested in buying the following product:\n\n` +
      `*Product Name:* ${product.name}\n` +
      `*Price:* ₹${product.price}\n` +
      `*Description:* ${product.description}\n\n` +
      `*Customer Details:*\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Address:* ${formData.address}\n` +
      `${formData.email ? `*Email:* ${formData.email}\n` : ""}`;

    return message;
  };

  const handleOrderViaWhatsApp = () => {
    onClick(); // Handle form submission via callback
    const message = generateWhatsAppMessage();
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="px-6 pt-4 pb-2">
      <button
        onClick={handleOrderViaWhatsApp}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center m-auto"
      >
        <FaWhatsapp className="mr-2" size={24} /> Order via WhatsApp
      </button>
    </div>
  );
};

export default WhatsAppShare;
