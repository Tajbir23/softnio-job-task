import { MdAccessTime } from "react-icons/md";
import Title from "../../ui/Title";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";


const Footer = () => {
  return (
    <footer className="relative ">
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="absolute inset-0 bg-[url('/src/assets/footer/image.png')] bg-cover bg-no-repeat bg-center -z-10" />
        
        <div className="relative z-10 lg:mx-48 mx-5 lg:py-28 py-5 text-white">
          
          <div>
              <Title className="!text-white !text-center">We ready to have you the best dining experiences</Title>
              <div className="mt-8 flex lg:flex-row flex-col justify-between px-5 gap-10">
                  <div className="flex flex-col items-center justify-between">
                    <MdAccessTime className="text-[#FEBF00] h-6 w-6 mb-3" />
                    <h1 className="font-bebas text-2xl mb-3 uppercase">Opening hours</h1>
                    <p className="font-roboto text-base">Monday - Sunday</p>
                    <p className="font-roboto text-base">9:00 AM to 11:30 PM</p>
                  </div>


                  <div className="flex flex-col items-center justify-between">
                    <FaPhoneAlt className="text-[#FEBF00] h-6 w-6 mb-3" />
                    <h1 className="font-bebas text-2xl mb-3 uppercase">LET'S TALK</h1>
                    <p className="font-roboto text-base">Phone: 1-800-222-4545</p>
                    <p className="font-roboto text-base">Fax: 1-800-222-4545</p>
                  </div>


                  <div className="flex flex-col items-center justify-between">
                    <CiMail className="text-[#FEBF00] h-6 w-6 mb-3" />
                    <h1 className="font-bebas text-2xl mb-3 uppercase">BOOK A TABLE</h1>
                    <p className="font-roboto text-base">Email: demo@website.com</p>
                    <p className="font-roboto text-base">Support: support@website.com</p>
                  </div>

                  <div className="flex flex-col items-center justify-between">
                    <FaLocationDot className="text-[#FEBF00] h-6 w-6 mb-3" />
                    <h1 className="font-bebas text-2xl mb-3 uppercase">Our Address</h1>
                    <p className="font-roboto text-base">123 Stree New York City , United </p>
                    <p className="font-roboto text-base">States Of America.</p>
                  </div>
              </div>

              <div className="m-auto flex flex-col items-center justify-center mt-20">
                <ul className="flex gap-5">
                    <li className="p-3 rounded-full border border-white"><a href="#"><FaFacebook className="h-5 w-5" /></a></li>
                    <li className="p-3 rounded-full border border-white"><a href="#"><RiTwitterXLine className="h-5 w-5" /></a></li>
                    <li className="p-3 rounded-full border border-white"><a href="#"><FaInstagramSquare className="h-5 w-5" /></a></li>
                    <li className="p-3 rounded-full border border-white"><a href="#"><FaLinkedin className="h-5 w-5" /></a></li>
                </ul>
                <p className="mt-5">© 2023 <span className="text-[#FEBF00]">Niomax</span> All Rights Reserved </p>
              </div>
          </div>
          
        </div>
      </footer>
  )
}

export default Footer