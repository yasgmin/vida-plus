
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HelpPage from "./pages/HelpPage";
import SchedulePage from "./pages/SchedulePage";
import ExamResultsPage from "./pages/ExamResultsPage";
import PatientDashboardPage from "./pages/PatientDashboardPage";
import PatientRecordPage from "./pages/PatientRecordPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Protected Routes for both user types */}
            <Route path="/help" element={
              <ProtectedRoute>
                <HelpPage />
              </ProtectedRoute>
            } />
            <Route path="/schedule" element={
              <ProtectedRoute userType="patient">
                <SchedulePage />
              </ProtectedRoute>
            } />
            <Route path="/results" element={
              <ProtectedRoute userType="patient">
                <ExamResultsPage />
              </ProtectedRoute>
            } />
            
            {/* Staff Only Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute userType="staff">
                <PatientDashboardPage />
              </ProtectedRoute>
            } />
            <Route path="/record/:id" element={
              <ProtectedRoute userType="staff">
                <PatientRecordPage />
              </ProtectedRoute>
            } />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
