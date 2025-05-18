
import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { FileDown, FileText, Search } from "lucide-react";

// Mock exams data
const exams = [
  { id: 1, name: "Hemograma Completo", date: "12/05/2023", status: "Disponível" },
  { id: 2, name: "Glicemia em Jejum", date: "12/05/2023", status: "Disponível" },
  { id: 3, name: "Colesterol Total e Frações", date: "05/04/2023", status: "Disponível" },
  { id: 4, name: "Radiografia de Tórax", date: "20/03/2023", status: "Disponível" },
  { id: 5, name: "Urina Tipo I", date: "20/03/2023", status: "Disponível" },
];

const ExamResultsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredExams = exams.filter(exam => 
    exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.date.includes(searchTerm)
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Resultados de Exames
          </h1>
          
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar por nome ou data..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-vidaplus-red focus:border-vidaplus-red"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h2 className="font-semibold text-lg">Exames Recentes</h2>
            </div>
            
            {filteredExams.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {filteredExams.map(exam => (
                  <li key={exam.id} className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-vidaplus-red mr-2" />
                          <span className="font-medium">{exam.name}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Data: {exam.date}</p>
                      </div>
                      
                      <Button
                        variant="outline"
                        className="text-vidaplus-red border-vidaplus-red hover:bg-vidaplus-light flex items-center gap-2"
                      >
                        <FileDown size={16} />
                        <span>Baixar</span>
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-6 py-12 text-center">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">Nenhum exame encontrado</h3>
                <p className="text-gray-500">
                  Não encontramos exames com os termos da sua busca.
                </p>
              </div>
            )}
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

export default ExamResultsPage;
