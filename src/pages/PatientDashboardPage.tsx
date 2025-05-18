
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Mock patients data
const patients = [
  { id: "001", name: "José Alberto" },
  { id: "002", name: "José Alberto" },
  { id: "003", name: "José Alberto" },
  { id: "004", name: "José Alberto" },
  { id: "005", name: "José Alberto" },
  { id: "006", name: "José Alberto" },
  { id: "007", name: "José Alberto" },
];

const PatientDashboardPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.includes(searchTerm)
  );

  const handleViewRecord = (patientId: string) => {
    navigate(`/record/${patientId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Qual prontuário gostaria de acessar?
          </h1>
          
          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar por nome ou ID do paciente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-vidaplus-red focus:border-vidaplus-red"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {filteredPatients.map(patient => (
                <li key={patient.id} className="p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-4">{patient.id}</span>
                      <span className="font-medium">{patient.name}</span>
                    </div>
                    <Button
                      className="vida-btn"
                      onClick={() => handleViewRecord(patient.id)}
                    >
                      Acessar prontuário
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
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

export default PatientDashboardPage;
