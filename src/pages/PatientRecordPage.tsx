
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PatientRecordPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Mock patient data - in a real app, you'd fetch this based on the ID
  const patientData = {
    id,
    name: "José Alberto",
    pronouns: "Ele/dele",
    gender: "Masculino",
    birthDate: "13/05/1989",
    cardiacHistory: "Sim",
    recentExams: [
      { name: "Hemograma", date: "10/04/2023", result: "Normal" },
      { name: "Glicemia", date: "10/04/2023", result: "Elevada" },
    ],
    alergies: [
      {name: "Dipirona",},
      {name: "Amoxilina"},
    ],
    medications: [
      { name: "Losartana", dosage: "50mg", frequency: "1x ao dia" },
      { name: "AAS", dosage: "100mg", frequency: "1x ao dia" },
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => navigate("/dashboard")}
            >
              <ArrowLeft size={16} />
              <span>Voltar</span>
            </Button>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-8">
            <h1 className="text-3xl font-bold text-center text-vidaplus-red mb-8">
              Histórico
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                    <div className="flex items-center justify-center h-full bg-vidaplus-red text-white">
                      <svg className="w-32 h-32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h2 className="text-xl font-bold">{patientData.name}</h2>
                    <div className="mt-2 space-y-1 text-sm">
                      <p className="text-gray-600">Se identifica como:</p>
                      <p className="font-medium text-vidaplus-red">{patientData.pronouns}</p>
                      
                      <p className="text-gray-600 mt-2">Gênero de nascença:</p>
                      <p className="font-medium">{patientData.gender}</p>
                      
                      <p className="text-gray-600 mt-2">Nascimento:</p>
                      <p className="font-medium text-vidaplus-red">{patientData.birthDate}</p>
                      
                      <p className="text-gray-600 mt-2">Histórico de doença cardíaca:</p>
                      <p className="font-medium text-vidaplus-red">{patientData.cardiacHistory}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-6">
                {/* Recent Exams */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4 border-b pb-2">Exames Recentes</h3>
                  <div className="space-y-3">
                    {patientData.recentExams.map((exam, index) => (
                      <div key={index} className="flex justify-between border-b pb-2 last:border-0">
                        <div>
                          <span className="font-medium">{exam.name}</span>
                          <p className="text-sm text-gray-500">{exam.date}</p>
                        </div>
                        <span className={`text-sm font-medium ${
                          exam.result === "Normal" ? "text-green-600" : "text-red-600"
                        }`}>
                          {exam.result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Medications */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4 border-b pb-2">Medicamentos Receitados</h3>
                  <div className="space-y-3">
                    {patientData.medications.map((med, index) => (
                      <div key={index} className="flex justify-between border-b pb-2 last:border-0">
                        <div>
                          <span className="font-medium">{med.name}</span>
                          <p className="text-sm text-gray-500">{med.dosage}</p>
                        </div>
                        <span className="text-sm">{med.frequency}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Alergies */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4 border-b pb-2">Alergias</h3>
                  <div className="space-y-3">
                    {patientData.alergies.map((med, index) => (
                      <div key={index} className="flex justify-between border-b pb-2 last:border-0">
                        <div>
                          <span className="font-medium">{med.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Notes */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4 border-b pb-2">Anotações</h3>
                  <textarea 
                    className="w-full h-32 p-3 border rounded-md" 
                    placeholder="Adicione observações sobre o paciente..."
                  ></textarea>
                  <div className="mt-3 flex justify-end">
                    <Button className="vida-btn">Salvar Anotações</Button>
                  </div>
                </div>
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

export default PatientRecordPage;
