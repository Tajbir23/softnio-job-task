/* eslint-disable react/prop-types */

const RadialProgressBar = ({ percentage, className="" }) => {
    const circleRadius = 45;
    const circleCircumference = 2 * Math.PI * circleRadius + 200;
  
    const progressOffset = circleCircumference - (percentage / 100) * circleCircumference;
  
    return (
      <div className={`flex justify-center items-center ${className}`}>
        <svg
          className="transform -rotate-90 w-24 h-24"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background circle */}
          <circle
            className="text-white"
            cx="50"
            cy="50"
            r={circleRadius}
            stroke="currentColor"
            strokeWidth="10"
            fill="transparent"
          />
          
          {/* Progress circle */}
          <circle
            className="text-[#FEBF00] transition-all duration-300"
            cx="50"
            cy="50"
            r={circleRadius}
            stroke="currentColor"
            strokeWidth="5"
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={progressOffset}
            strokeLinecap="round"
          />
  
          {/* Red dot at the end of the progress */}
          
        </svg>
  
        <span className="absolute text-2xl font-bold">
          {percentage}+
        </span>
      </div>
    );
  };
  
  export default RadialProgressBar;
  