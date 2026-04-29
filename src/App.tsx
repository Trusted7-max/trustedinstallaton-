import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServicesResidential from "./pages/ServicesResidential";
import ServicesCommercial from "./pages/ServicesCommercial";
import Contact from "./pages/Contact";
import HowTo from "./pages/HowTo";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";
import SolarSystems from "./pages/services/SolarSystems";
import SolarGeysers from "./pages/services/SolarGeysers";
import Aircon from "./pages/services/Aircon";
import CCTV from "./pages/services/CCTV";
import WiFi from "./pages/services/WiFi";
import NewDstvInstallation from "./pages/services/NewDstvInstallation";
import SignalTroubleshooting from "./pages/services/SignalTroubleshooting";
import DstvRepairServices from "./pages/services/DstvRepairServices";
import AdditionalTvPoints from "./pages/services/AdditionalTvPoints";
import TvMounting from "./pages/services/TvMounting";
import SurroundSoundSetup from "./pages/services/SurroundSoundSetup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { PHONE_NUMBER_RAW } from "./lib/constants";


const queryClient = new QueryClient();

import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/residential" element={<ServicesResidential />} />
          <Route path="/services/commercial" element={<ServicesCommercial />} />
          <Route path="/services/solar-systems" element={<SolarSystems />} />
          <Route path="/services/solar-geysers" element={<SolarGeysers />} />
          <Route path="/services/aircon" element={<Aircon />} />
          <Route path="/services/cctv" element={<CCTV />} />
          <Route path="/services/wifi" element={<WiFi />} />
          <Route path="/services/new-dstv-installation" element={<NewDstvInstallation />} />
          <Route path="/services/signal-troubleshooting" element={<SignalTroubleshooting />} />
          <Route path="/services/dstv-repair-services" element={<DstvRepairServices />} />
          <Route path="/services/additional-tv-points" element={<AdditionalTvPoints />} />
          <Route path="/services/tv-mounting" element={<TvMounting />} />
          <Route path="/services/surround-sound-setup" element={<SurroundSoundSetup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how-to" element={<HowTo />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton phoneNumber={PHONE_NUMBER_RAW} />
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
