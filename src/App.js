import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import Features from './components/Features';
import Connections from './components/Connections';
import Community from './components/Communities/Community';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Connections />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
