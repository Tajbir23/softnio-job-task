import Button from "../../ui/Button"
import Text from "../../ui/Text"
import Title from "../../ui/Title"


const BookingForm = () => {
  return (
    <div className={`bg-[url("/src/assets/booking/image.png")] bg-no-repeat bg-cover bg-center`}>
        <div className="lg:mx-48 mx-5 lg:py-28 py-5 flex justify-between">
            <div className="flex flex-col gap-5 lg:w-1/2">
                <Text>Book Now</Text>
                <Title className="!text-white">Book Your Table</Title>
                <p className="font-roboto text-[16px] text-white">Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                <div>
                    <form className="flex flex-col gap-5" action="" method="">
                        <div className="grid lg:grid-cols-2 gap-5">
                            <input type="text" name="name" className="px-3 py-2 bg-transparent border border-white text-white" placeholder="Your name*" />
                            <input type="email" name="email" className="px-3 py-2 bg-transparent border border-white text-white" placeholder="Your email" />
                            <input type="date" name="date" className="px-3 py-2 bg-transparent border border-white text-white" placeholder="Reservation date" />
                            <input type="number" name="people" className="px-3 py-2 bg-transparent border border-white text-white" placeholder="Total People" />
                        </div>

                        <textarea
                            name="message"
                            placeholder="Message"
                            className="w-full px-3 py-2 bg-transparent border border-white text-white outline-none resize-none min-h-[150px]"
                        />

                        <Button className="w-max">Book Now</Button>
                    </form>
                </div>
            </div>

            <div className="hidden lg:block">
                
            </div>
        </div>
    </div>
  )
}

export default BookingForm