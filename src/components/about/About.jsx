
import { useState } from 'react'
import aboutImage from './../../assets/image1.png'
import ExperienceCard from './ExperienceCard'
import AboutTab from './AboutTab'
import ExperienceTab from './ExperienceTab'
import ContactTab from './ContactTab'
import fastDelivery from './../../assets/about/fastDelivery.svg'
import absoluteDinning from './../../assets/about/absoluteDinning.svg'
import pickupDelivery from './../../assets/about/pickupDelivery.svg'

const About = () => {
    const [tab, setTab] = useState('about')
  return (
    <div className='lg:mx-48 mx-5 lg:py-28 py-5 min-h-[calc(100vh-75px)]'>
        <div className='flex flex-col gap-20'>
            <div className='flex gap-20 lg:justify-between lg:flex-row flex-col'>
                <div className='relative lg:w-1/2'>
                    <img src={aboutImage} alt="image" />
                    <ExperienceCard className="absolute top-5 left-5 font-openSans" />
                </div>

                <div className='lg:w-1/2'>
                    <ul className="flex gap-5 font-medium border-b border-b-[#B52B1D] font-inter mb-5">
                        <li onClick={() => setTab('about')} className={`${tab === "about" ? 'bg-[#B52B1D] text-white' : ''} px-3 py-1 cursor-pointer`}>About</li>
                        <li onClick={() => setTab('experience')} className={`${tab === "experience" ? 'bg-[#B52B1D]' : ''} px-3 py-1 cursor-pointer`}>Experience</li>
                        <li onClick={() => setTab('contact')} className={`${tab === "contact" ? 'bg-[#B52B1D]' : ''} px-3 py-1 cursor-pointer`}>Contact</li>
                    </ul>
                    {tab === "about" && <AboutTab />}
                    {tab === "experience" && <ExperienceTab />}
                    {tab === "contact" && <ContactTab />}
                </div>
            </div>

            <div className='flex lg:items-center justify-between lg:flex-row flex-col gap-5'>

                <div className='flex gap-5 items-center'>
                    <div className='h-20 w-20 rounded-full shadow-md flex items-center justify-center'>
                        <img className='' src={fastDelivery} alt="image" />
                    </div>
                    <div>
                        <h1 className=" font-bebas lg:text-3xl text-2xl uppercase">fast delivery</h1>
                        <p className='lg:text-xl text-lg font-inter'>Within 30 minutes</p>
                    </div>
                </div>

                <div className='flex gap-5 items-center'>
                    <div className='h-20 w-20 rounded-full shadow-md flex items-center justify-center'>
                        <img className='' src={absoluteDinning} alt="image" />
                    </div>
                    <div>
                        <h1 className=" font-bebas lg:text-3xl text-2xl uppercase">absolute dining</h1>
                        <p className='lg:text-xl text-lg font-inter'>Best buffet restaurant</p>
                    </div>
                </div>


                <div className='flex gap-5 items-center'>
                    <div className='h-20 w-20 rounded-full shadow-md flex items-center justify-center'>
                        <img className='' src={pickupDelivery} alt="image" />
                    </div>
                    <div>
                        <h1 className=" font-bebas lg:text-3xl text-2xl uppercase">pickup delivery</h1>
                        <p className='lg:text-xl text-lg font-inter'>Grab your food order</p>
                    </div>
                </div>



            </div>
        </div>
    </div>
  )
}

export default About