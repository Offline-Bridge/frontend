import Footer from "../components/common/Footer";
import Hero from "../components/homepage/Hero";
import Limitations from "../components/homepage/Limitations";
import Ready from "../components/homepage/Ready";
import Solution from "../components/homepage/Solution";
import Steps from "../components/homepage/Steps";

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
