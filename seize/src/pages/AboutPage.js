import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";

const AboutPage = () => {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutPage;
