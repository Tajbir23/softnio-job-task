import { useCallback, useEffect, useState } from "react";
import Carousel from "../../ui/Carousel";
import reviewImage from "./../../assets/review/review.png"
import customerProfile from "./../../assets/review/customerProfile.png"
import ReviewCard from "./ReviewCard";
import bgImage2 from "./../../assets/review/bgImage2.svg"
import bgImage3 from "./../../assets/review/bgImage3.svg"


const CustomerReviews = () => {
  const testimonials = [
    {
      id: 1,
      testimonial: "Absolutely loved the Lamb Mandi! The meat was tender, flavorful, and perfectly seasoned. The rice complemented the dish well, making every bite a delight. Highly recommend!",
      name: "Ali Ahmed",
      location: "Riyadh, Saudi Arabia",
      reviewImage: reviewImage,
      customerProfile: customerProfile
    },
    {
      id: 2,
      testimonial: "Absolutely loved the Lamb Mandi! The meat was tender, flavorful, and perfectly seasoned. The rice complemented the dish well, making every bite a delight. Highly recommend!",
      name: "Ali Ahmed",
      location: "Riyadh, Saudi Arabia",
      reviewImage: reviewImage,
      customerProfile: customerProfile
    },
    {
      id: 3,
      testimonial: "Absolutely loved the Lamb Mandi! The meat was tender, flavorful, and perfectly seasoned. The rice complemented the dish well, making every bite a delight. Highly recommend!",
      name: "Ali Ahmed",
      location: "Riyadh, Saudi Arabia",
      reviewImage: reviewImage,
      customerProfile: customerProfile
    },
    {
      id: 4,
      testimonial: "Absolutely loved the Lamb Mandi! The meat was tender, flavorful, and perfectly seasoned. The rice complemented the dish well, making every bite a delight. Highly recommend!",
      name: "Ali Ahmed",
      location: "Riyadh, Saudi Arabia",
      reviewImage: reviewImage,
      customerProfile: customerProfile
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false)

    const getVisibleCards = () => {
        if (typeof window !== 'undefined') {
          if (window.innerWidth >= 1024) return 4
          if (window.innerWidth >= 768) return 3
          if (window.innerWidth >= 640) return 2
          return 1
        }
        return 4
      }

      const [visibleCards, setVisibleCards] = useState(getVisibleCards())

      console.log(visibleCards)
      useEffect(() => {
        const handleResize = () => {
          setVisibleCards(getVisibleCards())
        }
    
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
      }, [])

      const handleNext = useCallback(() => {
        if (!isAnimating) {
          setIsAnimating(true)
          setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }
    }, [isAnimating, testimonials.length]);

    const handlePrev = useCallback(() => {
        if (!isAnimating) {
          setIsAnimating(true)
          setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        }
    }, [isAnimating, testimonials.length])

      useEffect(() => {
        const timer = setTimeout(() => {
          setIsAnimating(false)
        }, 300)
    
        return () => clearTimeout(timer)
      }, [currentIndex])

      useEffect(() => {
        const timer = setTimeout(() => {
          handleNext()
        }, 1000)
        
        return () => clearTimeout(timer)
      },[handleNext])

  
    
  return (
    <div className="relative">
      <Carousel text="Crispy, Every Bite Taste" title="What Some of my Customers Say" handleNext={handleNext} handlePrev={handlePrev}>
        <div className="flex">
          {testimonials.map((testimonial) => <ReviewCard key={testimonial.id} testimonial={testimonial} currentIndex={currentIndex} className="w-full flex-shrink-0 px-4 transition-transform duration-300 ease-in-out " />)}
        </div>
      </Carousel>
      <img src={bgImage2} alt="" className="absolute top-24 left-0 hidden lg:block" />
      <img src={bgImage3} alt="" className="absolute bottom-16 right-0 h-80 hidden lg:block" />
    </div>
  )
}

export default CustomerReviews