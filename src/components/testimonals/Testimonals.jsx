import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import burger from './../../assets/popular food/burger.png';
import pizza from './../../assets/popular food/pizza.png';
import frenchFrie from './../../assets/popular food/frenchFrie.png';
import chiken from './../../assets/popular food/chiken.png';
import TestimonalCard from "./TestimonalCard";
import { useCallback, useEffect, useState } from "react";
import image1 from "./../../assets/popular food/image1.png"

const Testimonals = () => {
    const foods = [
        {
            id: 1,
            image: burger,
            title: 'Vegetables Burger',
            description: 'Barbecue Italian cuisine pizza'
        },
        {
            id: 2,
            image: pizza,
            title: 'Special Pizza',
            description: 'Barbecue Italian cuisine pizza'
        },
        {
            id: 3,
            image: frenchFrie,
            title: 'Special French Fries',
            description: 'Barbecue Italian cuisine'
        },
        {
            id: 4,
            image: chiken,
            title: 'Cuisine Chicken',
            description: 'Japanese Cuisine Chicken'
        },
        {
            id: 5,
            image: chiken,
            title: 'Cuisine Chicken',
            description: 'Japanese Cuisine Chicken'
        }
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
          setCurrentIndex((prev) => (prev + 1) % foods.length)
        }
    }, [isAnimating, foods.length]);

    const handlePrev = useCallback(() => {
        if (!isAnimating) {
          setIsAnimating(true)
          setCurrentIndex((prev) => (prev - 1 + foods.length) % foods.length)
        }
    }, [isAnimating, foods.length])

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
        <div className="bg-orange-50 relative">
            <div className="lg:mx-48 mx-5 lg:py-28 py-5">
                <div className="flex gap-2 items-center">
                    <div className="h-2 w-2 bg-[#BD1F17]"></div>
                    <h1 className="text-[#BD1F17] font-bold font-roboto text-lg">Crispy, Every Bite Taste</h1>
                </div>

                <div className="mt-2 flex justify-between items-center">
                    <h1 className="font-bebas lg:text-6xl text-4xl">POPULAR FOOD ITEMS</h1>
                    <div className="flex items-center gap-5">
                        <div onClick={handlePrev} className="h-10 w-10 rounded-full shadow-md flex items-center justify-center cursor-pointer bg-white">
                            <MdKeyboardArrowLeft className="text-3xl" />
                        </div>
                        <div onClick={handleNext} className="h-10 w-10 rounded-full shadow-md flex items-center justify-center cursor-pointer bg-white">
                            <MdKeyboardArrowRight className="text-3xl" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 relative overflow-hidden">
                    <div className="flex">
                        {foods.map(food => <TestimonalCard key={food.id} food={food} currentIndex={currentIndex} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-4 transition-transform duration-300 ease-in-out ' />)}
                    </div>
                </div>
            </div>
            <img src={image1} alt="image" className="absolute top-[30%] h-96 hidden lg:block" />
        </div>
    );
};

export default Testimonals;
