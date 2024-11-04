import Navbar from "./Navbar"
import heroImage from "./../../assets/heroImage.png"
import heroIcon from "./../../assets/heroIcon.svg"
import Button from "../../ui/Button"

const Hero = () => {
  return (
    <div className="sticky bg-red-800 min-h-screen">
        <Navbar />

        <div className="lg:mx-36 mx-5 lg:py-28 py-5 flex lg:flex-row flex-col gap-10 lg:justify-between relative">
            <div className="w-full lg:my-auto flex flex-col gap-10 z-30">
                <div className="lg:absolute lg:w-3/4 w-full text-white  lg:bg-gradient-to-r lg:from-transparent lg:via-red-700/5  lg:to-red-700">
                    <h1 className="font-bold lg:text-8xl text-6xl w-full">Taste the authentic
                    Saudi cuisine</h1>
                </div>
                <div className="lg:mt-52 flex flex-col gap-10">
                    <p className="text-2xl text-white">
                    Among the best Saudi chefs in the world, serving you something beyond flavor. 
                    </p>
                    <Button className="w-max">EXPLORE MENU</Button>
                </div>
            </div>

            <div className="w-full relative z-20">
                <img src={heroImage} alt="" className="ml-auto " />
                <img src={heroIcon} alt="" className="absolute lg:-top-8 lg:-right-7 lg:z-50 -top-5 right-0 -z-10" />

                <div className="absolute lg:bottom-0 lg:-right-16 bottom-5 right-5 bg-[#FEBF00] lg:h-36 lg:w-36 h-32 w-32 rounded-full flex items-center justify-center text-center">
                    <div className="lg:h-32 lg:w-32 h-28 w-28 border-2 border-dashed border-[#BD1F17] rounded-full flex items-center justify-center">
                        <h1 className="font-bold lg:text-3xl text-2xl">TODAY OFFER</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero