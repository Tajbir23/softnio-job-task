import heroImage from "./../../assets/heroImage.png"
import heroIcon from "./../../assets/heroIcon.svg"
import Button from "../../ui/Button"

const Hero = () => {
  return (
    <div className=" bg-red-700 relative -top-[74px] lg:pt-10 pt-14">

        <div className="lg:mx-48 mx-5 lg:py-28 py-5 min-h-screen flex lg:flex-row flex-col gap-10 lg:justify-between relative">
            <div className="w-full lg:my-auto flex flex-col gap-10 z-30">
                <div className="lg:absolute lg:w-3/4 w-full text-white py-4 lg:bg-gradient-to-r lg:from-transparent lg:via-red-700/5  lg:to-red-800">
                    <h1 className="font-bebas lg:text-[120px] text-6xl w-full uppercase">Taste the authentic
                    Saudi cuisine</h1>
                </div>
                <div className="lg:mt-72 flex flex-col gap-10">
                    <p className="text-2xl text-white ">
                    Among the best Saudi chefs in the world, serving you something beyond flavor. 
                    </p>
                    <Button className="w-max">EXPLORE MENU</Button>
                </div>
            </div>

            <div className="w-full relative z-20">
                <img src={heroImage} alt="" className="ml-auto " />
                <img src={heroIcon} alt="" className="absolute lg:-top-8 lg:-right-7 lg:z-50 -top-5 right-0 -z-10" />

                <div className="absolute lg:bottom-0 lg:-right-12 shadow-sm bottom-5 right-5 bg-[#FEBF00] lg:h-28 lg:w-28 h-20 w-20 rounded-full flex items-center justify-center text-center">
                    <div className="lg:h-24 lg:w-24 h-16 w-16 border-2 border-dashed border-[#BD1F17] rounded-full flex items-center justify-center">
                        <h1 className="font-bold lg:text-3xl text-xl font-bebas">TODAY <br /> OFFER</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero