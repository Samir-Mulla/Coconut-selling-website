import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMobileAlt,
  FaUserCircle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-lime-200 p-6 shadow-md mt-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-6 pt-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-black mb-4">
          &copy; 2024 Dawood's Coconut Store, All rights reserved.
        </p>

        <div className="mt-4">
          <h3 className="text-lg text-gray-800 mb-4">Contact Us</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-16 mt-4">
            <div className="flex justify-center items-center space-x-2">
              <FaUserCircle size={40} className="text-black" />
              <div>
                <span className="font-bold">Javed Mulla</span>
                <div className="flex items-center space-x-2">
                  <FaMobileAlt size={24} className="text-black" />
                  <span className="font-bold underline underline-offset-4">
                    {" "}
                    <a href="tel:+919921228546">+91 9921228546</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <FaUserCircle size={40} className="text-black" />
              <div>
                <span className="font-bold">Sameer Mulla</span>
                <div className="flex items-center space-x-2">
                  <FaMobileAlt size={24} className="text-black" />
                  <span className="font-bold underline underline-offset-4">
                    {" "}
                    <a href="tel:+919832494949">+91 9832494949</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 mt-8">
            <a
              href="https://www.freepik.com/free-vector/realistic-empty-hammock-palm-trees-flock-birds-sky-white_6804331.htm#query=coconut%20tree&position=2&from_view=keyword&track=ais_user&uuid=ba23ba82-dc1e-4fa1-b661-37b32868ba0e"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image by macrovector on Freepik
            </a>{" "}
            Photo by
            <a href="https://unsplash.com/@xiaoyulifish?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Xiaoyu Li
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/green-fruit-on-brown-wooden-table-tW0j8n-GIUY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
            {" ,"}
            Photo by{" "}
            <a href="https://unsplash.com/@corinnekutz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Corinne Kutz
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/red-apple-fruit-on-gray-concrete-surface-468TVCIbvkU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
            Photo by{" "}
            <a href="https://unsplash.com/@knottt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Ivy Law
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/coconut-fruit-AXFVS1yRD0Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
            <a href="https://www.freepik.com/free-photo/fresh-coconuts-background_1273502.htm#fromView=search&page=1&position=46&uuid=a3cdfd73-33a5-4a3f-bbe2-445a58a05305">
              Image by topntp26 on Freepik
            </a>{" "}
            <p className="text-black mb-4">
              Developed & Managed By <a href="https://samirmulla-dev.netlify.app/">Samir Mulla</a>
            </p>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
