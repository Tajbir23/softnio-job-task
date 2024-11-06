/* eslint-disable react/prop-types */
import bgImage1 from "./../../assets/review/bgImage1.svg"

const ReviewCard = ({className, testimonial, currentIndex}) => {
  return (
    <div className={`${className}`} style={{transform: `translateX(-${currentIndex * 100}%)`}}>
        <div className="flex lg:flex-row flex-col-reverse">
            <div className="lg:w-1/2 w-full bg-[#FEBF00] flex flex-col justify-between lg:p-16 p-8 relative">

              <div>
                  <p className="font-roboto text-xl">{testimonial.testimonial}</p>
              </div>

              <div className="flex justify-between">
                  <div className="pt-10 pb-2 border-b-2 border-black w-full">
                      <h1 className="font-bebas text-lg">{testimonial.name}</h1>
                      <p className="font-roboto text-sm">{testimonial.location}</p>
                  </div>
                  <div className="pt-10 pb-2 border-b-4 border-[#BD1F17]">
                      <img className="h-10 w-10 " src={testimonial?.customerProfile} alt="" />
                  </div>
              </div>
                
              <img src={bgImage1} alt="" className="absolute -bottom-5 left-0 w-8 lg:bottom-10 lg:w-10" />
            </div>
            <img src={testimonial.reviewImage} alt="image" className="lg:w-1/2 w-full" />
        </div>
    </div>
  )
}

export default ReviewCard