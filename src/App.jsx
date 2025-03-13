import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Section1 />
      <div className="bg-slate-200">
        <Section2 />
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
