/* eslint-disable react/prop-types */


const Title = ({children, className}) => {
  return (
    <h1 className={`font-bebas lg:text-6xl text-4xl ${className}`}>{children}</h1>
  )
}

export default Title