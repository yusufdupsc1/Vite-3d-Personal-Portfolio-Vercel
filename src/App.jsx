import Header from "./components/microchat/Header";
import Hero from "./components/microchat/Hero";
import FeatureGrid from "./components/microchat/FeatureGrid";
import Testimonials from "./components/microchat/Testimonials";
import Pricing from "./components/microchat/Pricing";
import Faq from "./components/microchat/Faq";
import Cta from "./components/microchat/Cta";
import Footer from "./components/microchat/Footer";

const App = () => (
  <div className='min-h-screen bg-slate-950 text-slate-100'>
    <Header />
    <main>
      <Hero />
      <FeatureGrid />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
    </main>
    <Footer />
  </div>
);

export default App;
