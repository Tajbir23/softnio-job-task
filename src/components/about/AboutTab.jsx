import { MdOutlinePhoneInTalk } from 'react-icons/md'
import Button from './../../ui/Button'
const AboutTab = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold lg:text-5xl text-4xl font-bebas">Exceptional culinary <br /> experience and delicious food</h1>
      <p className="font-roboto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
      <div className='flex gap-5 items-center'>
          <Button className='uppercase'>About More</Button>
          <div className='flex gap-2 items-center'>
            <MdOutlinePhoneInTalk className='text-2xl text-[#BD1F17]' />
            <span className='text-[18px] font-bold font-roboto'>+123 456 7890</span>
          </div>
      </div>
    </div>
  )
}

export default AboutTab