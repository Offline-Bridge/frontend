import Footer from "./Components/common/Footer"
import Hero from "./Components/Homepage_components/Hero"
import Limitations from "./Components/Homepage_components/Limitations"
import Ready from "./Components/Homepage_components/Ready"
import Solution from "./Components/Homepage_components/Solution"
import Steps from "./Components/Homepage_components/Steps"


export default function Home() {
  return (
    <div >
      <Hero />
      <Limitations />
      <Solution />
      <Steps />
      <Ready />
      <Footer />
    </div>

  );
}
