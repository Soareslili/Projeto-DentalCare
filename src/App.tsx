import { About } from "./components/About";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import { Services } from "./components/Service";
import { SpecializedServices } from "./components/SpecializedServices";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";





function App() {
  

  return (
    <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Services />
    <About />
    <Gallery />
    <SpecializedServices />
    <Team />
    <Testimonials />
    <FinalCTA />
   <Footer />
    </div>
  )
}

export default App
