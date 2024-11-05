
// eslint-disable-next-line react/prop-types
const Button = ({children, className=""}) => {
  return (
    <button className={`bg-[#FEBF00] font-bold text-[16px] px-5 py-2 ${className} font-roboto`}>{children}</button>
  )
}

export default Button