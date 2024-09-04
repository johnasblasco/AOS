import { FaChevronDown } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";


const Header = () => {

      const scrollDown = () => {
            window.scrollBy({
                  top: window.innerHeight,
                  behavior: 'smooth',
            });
      };

      useEffect(() => {
            Aos.init();
      }, [])

      return (
            <div className="h-screen flex flex-col gap-10 justify-center items-center bg-blue-600/50">
                  <h1 className="text-8xl font-bolder text-gray-800" data-aos="zoom-in-up">AOS</h1>
                  <p className="text-4xl text-white" data-aos="zoom-in">Animate On Scroll Library</p>
                  <p className="text-4xl text-white">SCROLL DOWN</p>
                  <FaChevronDown
                        onClick={() => scrollDown()}
                        className="animate-bounce cursor-pointer text-4xl text-white"
                  />
            </div>
      )
}

export default Header