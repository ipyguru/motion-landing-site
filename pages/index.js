import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Reviews,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  Contact,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
      <Reviews />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <div className="relative">
      <Contact />
      <div className="gradient-05 z-0" />
      <Insights />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
