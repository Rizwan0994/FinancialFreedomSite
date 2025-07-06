import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import Home from "@/pages/Home";
import StartHere from "@/pages/StartHere";
import FAQ from "@/pages/FAQ";
import Books from "@/pages/Books";
import NotFound from "@/pages/not-found";
import Booking from "./pages/Booking";
import AboutJohn from "@/pages/AboutJohn";
import PathToFreedomPage from "@/pages/PathToFreedomPage";
import NextFrameworkPage from "@/pages/NextFrameworkPage";
import ClientSuccessPathPage from "@/pages/ClientSuccessPathPage";
import ServicesPage from "@/pages/ServicesPage";
import ResourcesPage from "@/pages/ResourcesPage";
import NavigateBusinessGrowthPage from "@/pages/services/NavigateBusinessGrowthPage";
import ElevateWealthPage from "@/pages/services/ElevateWealthPage";
import ExitStrategyPage from "@/pages/services/ExitStrategyPage";
import TransferLegacyPage from "@/pages/services/TransferLegacyPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/start-here" component={StartHere} />
      <Route path="/about-john" component={AboutJohn} />
      <Route path="/path-to-freedom" component={PathToFreedomPage} />
      <Route path="/next-framework" component={NextFrameworkPage} />
      <Route path="/client-success" component={ClientSuccessPathPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/services/navigate-business-growth" component={NavigateBusinessGrowthPage} />
      <Route path="/services/elevate-wealth" component={ElevateWealthPage} />
      <Route path="/services/exit-strategy" component={ExitStrategyPage} />
      <Route path="/services/transfer-legacy" component={TransferLegacyPage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/faq" component={FAQ} />
      <Route path="/books" component={Books} />
      <Route path="/booking" component={Booking} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
