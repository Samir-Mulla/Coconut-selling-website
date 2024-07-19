import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Input from "./Input";
import WhatsAppShare from "./WhatsAppShare";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";

const ContactForm = ({ onSubmit }) => {
  const location = useLocation();
  const product = location.state?.product;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    dateTime: null,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const phoneNumber = "+9156533461";

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d{0,10}$/.test(value)) {
      return;
    }
    setFormData({ ...formData, [name]: value });
    setSubmitted(false);
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dateTime: date });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }
    if (!formData.address) newErrors.address = "Address is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrderViaWhatsApp = () => {
    if (validateForm()) {
      onSubmit(formData);
      setFormData({
        name: "",
        phone: "",
        address: "",
        email: "",
        dateTime: null,
      });
      setSubmitted(true);
      return true;
    } else {
      setSubmitted(false);
      return false;
    }
  };

  return (
    <div>
      {product && (
        <div className="product-info mb-4 text-center flex flex-col items-center">
          <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
          <p className="text-sm text-gray-600">{product.description}</p>
          <img
            src={product.image}
            alt={product.name}
            className="mb-4 w-32 h-32 object-cover rounded-md mt-4"
          />
          <p className="flex items-center justify-center text-xl font-extrabold">
            <span className="text-lime-600">₹</span>
            <span className="text-black">{product.price}</span>
          </p>
        </div>
      )}

      {!submitted ? (
        <form
          method="post"
          action=""
          className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            id="name"
            name="name"
            type="text"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />

          <Input
            id="phone"
            name="phone"
            type="tel"
            label="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            pattern="[0-9]{10}"
          />

          <Input
            id="address"
            name="address"
            type="text"
            label="Address"
            value={formData.address}
            onChange={handleChange}
            error={errors.address}
          />

          <div className="mb-4">
            <label
              htmlFor="dateTime"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Date and Time (optional)
            </label>
            <DateTimePicker
              id="dateTime"
              onChange={handleDateChange}
              value={formData.dateTime}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <Input
            id="email"
            name="email"
            type="email"
            label="Email (optional)"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <WhatsAppShare
            phoneNumber={phoneNumber}
            formData={formData}
            product={product}
            validateForm={validateForm}
            onSubmit={handleOrderViaWhatsApp}
          />
        </form>
      ) : (
        <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-lg text-gray-800 font-bold mb-2">
            Thank you for your order!
          </p>
          <p className="text-gray-600">
            We will contact you via WhatsApp shortly.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
