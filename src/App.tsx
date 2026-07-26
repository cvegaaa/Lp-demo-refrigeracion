import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import About from "@/components/About";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <SocialProof />
        <Booking />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
