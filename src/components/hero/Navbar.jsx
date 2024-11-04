
const Navbar = () => {
    const navMenu = <ul className="flex gap-4 ">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Clients</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
  return (
    <div className="py-5 flex items-center justify-between lg:mx-36 mx-5 sticky top-0 z-50 bg-transparent">
        <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
                <img src="/src/assets/hotelIcon.svg" alt="" />
                <h1 className="text-[28px]"><span className="font-semibold">Restau</span><span>rant</span></h1>
            </div>

            <nav className="gap-4 hidden lg:flex">
                {navMenu}
            </nav>

        </div>
        <button className="bg-[#FEBF00] font-bold text-[16px] px-5 py-2 hidden lg:block">BOOK A TABLE</button>
    </div>
  )
}

export default Navbar