import { Link } from "react-router-dom";
function Footer() {
    return ( 
        <footer className="border-t bg-blue-950 border-gray-200">
        <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={`${import.meta.env.BASE_URL}logo2.png`} alt="" 
                className="w-12"
                />
                <span className="font-semibold text-white">Pinoys in Profit</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Empowering Filipino traders with the knowledge and community support needed to succeed in forex trading.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                 <li><Link to={"/"} className="text-white/50 hover:text-white transition-colors">Home</Link></li>
                 <li><Link to={"/about"} className="text-white/50 hover:text-white transition-colors">About</Link></li>
                 <li><Link to={"/services"} className="text-white/50 hover:text-white transition-colors">Services</Link></li>
                <li> <Link to={"/contact"} className="text-white/50 hover:text-white transition-colors">Contact us</Link></li>          
              </ul>
            </div>
              <div>
              <h3 className="text-white mb-4">Disclaimer  </h3>
              <div>
                <p className="space-y-2 text-sm text-white/50 ">Forex trading on margin entails high risk and is not suitable for all investors.
                Past performance is not an indication of future results. In this case, as well the high degree of leverage can act both against you and for you.
                </p>
              </div>
            </div>


            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
              <div className="space-y-2 text-sm text-white/50 ">
                <p>pinoysinprofit@gmail.com</p>
               
              </div>
              <div className="flex space-x-3 mt-4">
                <a href="https://www.facebook.com/profile.php?id=100063802973364" 
                   className="w-8 h-8 bg-gray-200 rounded-full text-blue-600 flex items-center justify-center hover:bg-blue-900 hover:text-white transition-colors" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <i className="fab fa-facebook-f text-sm"></i>
                </a>
                <a href="https://twitter.com/yourtwitterhandle" 
                   className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition-colors" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <i class="fa-brands fa-tiktok"></i>
                </a>
                <a href="https://youtube.com/@pinoysinprofit?si=n7lwaI3xawBlUCP2" 
                   className="w-8 h-8 bg-gray-200 text-red-500 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition-colors" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  <i className="fab fa-youtube text-sm"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-500">
              © 2026 Pinoys in Profit. All rights reserved. 
            </p>
          </div>
        </div>
      </div>
        </footer>
     );
}

export default Footer;