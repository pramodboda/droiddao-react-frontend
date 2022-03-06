
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import LiveProjectsSection from "./components/LiveProjectsSection/LiveProjectsSection";
import ClosedProjectsSection from "./components/ClosedProjectsSection/ClosedProjectsSection";
import FooterSection from "./components/FooterSection/FooterSection";

import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      
      <HeroSection />
      <LiveProjectsSection/>
      <ClosedProjectsSection/>
      <FooterSection/>

    </div>
  );
}

export default App;
