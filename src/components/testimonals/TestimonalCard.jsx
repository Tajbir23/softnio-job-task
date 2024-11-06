/* eslint-disable react/prop-types */


const TestimonalCard = ({food, className, currentIndex}) => {
    
  return (
    <div className={`${className} `} style={{
      transform: `translateX(-${currentIndex * 100}%)`,
    }}>
        <div className="group bg-white p-5 h-full" >
            <div className="flex justify-center">
                <img src={food.image} alt="image" className="h-32 " />
            </div>
            <hr className="border-t-4 border-[#BD1F17] max-w-14 m-auto mt-5 " />
            <div className="text-center">
                <h1 className="font-bebas text-2xl mt-5">{food.title}</h1>
                <p className="font-inter text-lg">{food.description}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonalCard