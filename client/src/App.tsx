import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingSocial } from "@/components/FloatingSocial";
import Home from "@/pages/Home";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen">
          <Navigation />
          <main>
            <Home />
          </main>
          <FloatingSocial />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
