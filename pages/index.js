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
    <About />
    <Explore />
    <Reviews />
    <div className="relative">
      <GetStarted />
      <div className="gradient-02 z-0" />
      <WhatsNew />
    </div>
    <div className="relative">
      <Insights />
      <div className="gradient-05 z-0" />
      <Feedback />
    </div>
    <Contact />
    <Footer />
  </div>
);

export default Page;
