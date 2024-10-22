import './App.css'
import FoodItems from './Components/FoodItems'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'

function App() {


  return (
    <>
        <Header className=' z-30'/>
        <Hero />
        <FoodItems/>
        <Footer/>
    </>
  )
}

export default App
