/* eslint-disable react/prop-types */
import RadialProgressBar from "../../ui/RedialProgressbar"


const ExperienceCard = ({className}) => {
  return (
    <div className={`${className} bg-white p-5 rounded-md flex items-center justify-center gap-5`}>
        <RadialProgressBar percentage={50} />
        <p className="font-semibold">Market <br />
        Experiences</p>
    </div>
  )
}

export default ExperienceCard