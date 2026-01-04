import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Science from "./pages/Science";
import Research from "./pages/Research";
import Programs from "./pages/Programs";
import People from "./pages/People";
import Partners from "./pages/Partners";
import Community from "./pages/Community";
import Explore from "./pages/Explore";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/science" element={<Science />} />
            <Route path="/science/:topic" element={<Science />} />
            <Route path="/research" element={<Research />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/people" element={<People />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/community" element={<Community />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
