
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Calendar, FileText } from "lucide-react";

const HelpPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">Como podemos ajudar hoje?</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Schedule Appointment Card */}
            <div className="bg-white rounded-lg border border-vidaplus-salmon shadow-md hover:shadow-lg transition-all duration-200">
              <div className="p-8 flex flex-col items-center">
                <div className="bg-vidaplus-red text-white p-6 rounded-md w-24 h-24 flex items-center justify-center mb-6">
                  <Calendar size={40} />
                </div>
                
                <Link to="/schedule" 
                  className="mt-4 vida-btn w-full md:w-auto flex items-center justify-center gap-2 text-lg py-3 px-6">
                  Agendar consulta 
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            
            {/* Exam Results Card */}
            <div className="bg-white rounded-lg border border-vidaplus-salmon shadow-md hover:shadow-lg transition-all duration-200">
              <div className="p-8 flex flex-col items-center">
                <div className="bg-vidaplus-red text-white p-6 rounded-md w-24 h-24 flex items-center justify-center mb-6">
                  <FileText size={40} />
                </div>
                
                <Link to="/results" 
                  className="mt-4 vida-btn w-full md:w-auto flex items-center justify-center gap-2 text-lg py-3 px-6">
                  Resultado exames
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">Desenvolvido por - Yasmin Gonçalves</p>
        </div>
      </footer>
    </div>
  );
};

export default HelpPage;
