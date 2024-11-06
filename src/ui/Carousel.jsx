/* eslint-disable react/prop-types */
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import Text from "./Text"
import Title from "./Title"


const Carousel = ({children, text, title, handlePrev, handleNext}) => {
    
    const sliderButton = <>
    <div onClick={() => handlePrev()} className="group h-10 w-10 rounded-full shadow-md flex items-center justify-center cursor-pointer bg-white">
            <MdKeyboardArrowLeft className="text-3xl group-focus:text-red-800" />
    </div>
    <div onClick={() => handleNext()} className="group h-10 w-10 rounded-full shadow-md flex items-center justify-center cursor-pointer bg-white">
            <MdKeyboardArrowRight className="text-3xl group-focus:text-red-800" />
    </div>
    </>
  return (
    <>
    <div className="lg:mx-48 mx-5 lg:py-28 py-5">
                <Text>{text}</Text>

                <div className="mt-2 flex justify-between items-center">
                    <Title>{title}</Title>
                    <div className="items-center gap-5 hidden lg:flex">
                        {sliderButton}
                    </div>
                </div>

                <div className="mt-8 relative overflow-hidden">
                    {children}
                    
                </div>

                <div className="flex items-center justify-center gap-5 mt-5 lg:hidden">
                    {sliderButton}
                </div>
            </div>
    </>
  )
}

export default Carousel