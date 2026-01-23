import Footer from "../Components/common/Footer";
import Hero from "../Components/homepage/Hero";
import Limitations from "../Components/homepage/Limitations";
import Ready from "../Components/homepage/Ready";
import Solution from "../Components/homepage/Solution";
import Steps from "../Components/homepage/Steps";


export default function Home() {
  return (
    <div>
      <Hero />
      <Limitations />
      <Solution />
      <Steps />
      <Ready />
      <Footer />
    </div>
  );
}
