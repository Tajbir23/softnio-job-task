import { IoMdMenu } from "react-icons/io"
import logo from "../../assets/hotelIcon.svg"
import { useState } from "react"
import Button from "../../ui/Button"
const Navbar = () => {
    const [open, setOpen] = useState(false)

    const navMenu = <ul className="flex gap-4 lg:flex-row flex-col font-raleway">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Clients</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
  return (
    <div className="sticky top-0 z-50 bg-red-800 bg-opacity-45 w-full">
    <div className="py-4 flex items-center justify-between lg:mx-48 mx-5 bg-transparent">
        <div className="flex items-center gap-10 text-white">
            <div className="flex items-center gap-2">
                <img src={logo} alt="" className="w-[40px] h-[40px]" />
                <h1 className="text-[28px] font-poppins"><span className="font-semibold">Restau</span><span>rant</span></h1>
            </div>

            <nav className="gap-4 hidden lg:flex">
                {navMenu}
            </nav>

        </div>
        <Button className="hidden lg:block" >BOOK A TABLE</Button>
        <IoMdMenu onClick={() => setOpen(!open)} className="text-[28px] lg:hidden text-white cursor-pointer" />
    </div>
        <div className={`${open ? "flex" : "hidden"} lg:hidden flex-col gap-4 w-full p-5 text-center absolute bg-red-800 bg-opacity-45`}>
            {navMenu}
            <Button className="w-max m-auto">BOOK A TABLE</Button>
        </div>
    </div>
  )
}

export default Navbar