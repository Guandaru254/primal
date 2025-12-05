import HeroSlider from "./components/HeroSlider/HeroSlider";
import IntroductionSection from "./components/Introduction/IntroductionSection";
import AboutExperience from "./components/AboutExperience/AboutExperience";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/UI/Footer";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <IntroductionSection />
      <AboutExperience />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
