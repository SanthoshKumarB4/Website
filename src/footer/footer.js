import { FaMapMarkerAlt, FaPhone, FaEnvelopeOpen, FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <FaMapMarkerAlt className="text-xl mx-auto md:mx-0" />
            <h4 className="text-lg font-semibold mt-2">Find us</h4>
            <p>1010 Avenue, SW 54321, Chandigarh</p>
          </div>
          <div>
            <FaPhone className="text-xl mx-auto md:mx-0" />
            <h4 className="text-lg font-semibold mt-2">Call us</h4>
            <p>9876543210</p>
          </div>
          <div>
            <FaEnvelopeOpen className="text-xl mx-auto md:mx-0" />
            <h4 className="text-lg font-semibold mt-2">Mail us</h4>
            <p>mail@info.com</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div>
            <img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="logo" className="mx-auto md:mx-0 w-32" />
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <FaFacebookF className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaGooglePlusG className="cursor-pointer" />
            </div>
          </div>
         
        
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center">
        <p>Copyright &copy; 2024, All Rights Reserved <a href="https://codepen.io/anupkumar92/" className="text-blue-400">Anup</a></p>
      </div>
    </footer>
  );
};

export default Footer;
