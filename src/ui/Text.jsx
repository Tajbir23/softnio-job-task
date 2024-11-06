/* eslint-disable react/prop-types */


const Text = ({children}) => {
  return (
    <div className="flex gap-2 items-center">
                    <div className="h-2 w-2 bg-[#BD1F17]"></div>
                    <h1 className="text-[#BD1F17] font-bold font-roboto text-lg">{children}</h1>
                </div>
  )
}

export default Text