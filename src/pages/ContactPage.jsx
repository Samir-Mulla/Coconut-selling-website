import React from "react";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  const handleSubmit = (formData) => {
    // Handle form submission, e.g., send data to an API
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="container mx-auto mt-8 px-4 md:px-0">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-800 mb-4 text-center pt-4">
        Have questions or feedback? Reach out to us:
      </p>
      <ContactForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ContactPage;
