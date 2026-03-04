import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import { Services } from "./components/Service";




function App() {
  

  return (
    <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Services />
    <About />
    <Gallery />
    </div>
  )
}

export default App
