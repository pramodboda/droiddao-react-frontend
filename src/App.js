import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <HeroSection />
    </div>
  );
}

export default App;
