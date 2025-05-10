import { assets } from '../assets/assets'

const Footer = () => {
    return (
      <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
          {/* Logo and Description Section */}
          <div>
            <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
            <p className="w-full md:w-2/3 text-gray-600">
              Discover the latest fashion trends and timeless classics at LUSORA. Our curated collection features a wide range of styles for every occasion. From casual wear to formal attire, we have something to suit every taste. Shop now and elevate your wardrobe with our exceptional quality and affordable prices.
            </p>
          </div>
  
          {/* Company Links Section */}
          <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
  
          {/* Get in Touch Section */}
          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>+1 438 322 1833</li>
              <li>lou.als2904@gmail.com</li>
            </ul>
          </div>
        </div>
  
        {/* Featured Brands Section */}
        <div className="mt-10">
          <p className="text-xl font-medium mb-5 text-center">FEATURED BRANDS</p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {/* Brand 1 */}
            <img
              src={assets.brand1} // Replace with actual brand logo paths in your `assets`
              alt="Brand 1 Logo"
              className="w-24 h-auto"
            />
            {/* Brand 2 */}
            <img
              src={assets.brand3}
              alt="Brand 2 Logo"
              className="w-24 h-auto"
            />
            {/* Brand 3 */}
            <img
              src={assets.brand2}
              alt="Brand 3 Logo"
              className="w-24 h-auto"
            />
            {/* Add more brands if needed */}
          </div>
        </div>
  
        {/* Footer Bottom Section */}
        <div>
          <hr />
          <p className="py-5 text-sm text-center">
            Copyright 2024@ Lusora.com - All Rights Reserved.
          </p>
        </div>
      </div>
    );
  };
  
  export default Footer;