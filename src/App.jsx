import About from "./components/about/About"
import BookingForm from "./components/Booking/BookingForm"
import Hero from "./components/hero/Hero"
import Navbar from "./components/hero/Navbar"
import CustomerReviews from "./components/reveiws/CustomerReviews"
import Testimonals from "./components/testimonals/Testimonals"



function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimonals />
      <BookingForm />
      <CustomerReviews />
    </>
  )
}

export default App
