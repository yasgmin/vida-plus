
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Calendar as CalendarIcon } from "lucide-react";

// Mock doctor data
const doctors = [
  { id: 1, name: "Dr. Luiz Camargo", specialty: "Clínico geral", available: true },
  { id: 2, name: "Dra. Leila Gianotti", specialty: "Neurocirurgia", available: true },
  { id: 3, name: "Dr. Roberto Souza", specialty: "Psiquiatra", available: true },
  { id: 4, name: "Dr. Wagner Wey", specialty: "Oftalmologista", available: true },
  { id: 5, name: "Dr. Luiz Souza", specialty: "Cardiologista", available: true },
];

const SchedulePage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDoctorSelect = (doctorId: number) => {
    setSelectedDoctor(doctorId);
    setSelectedDate(undefined);
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handleSchedule = () => {
    if (!selectedDoctor || !selectedDate) {
      toast({
        title: "Erro no agendamento",
        description: "Por favor, selecione um médico e uma data.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Consulta agendada com sucesso!",
      description: `Sua consulta foi marcada para ${selectedDate.toLocaleDateString('pt-BR')}`,
    });

    setTimeout(() => {
      navigate("/help");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Agende sua consulta agora mesmo!
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-vidaplus-red p-3 rounded-md text-white mr-4">
                <CalendarIcon size={24} />
              </div>
              <h2 className="text-xl font-semibold">
                Escolha o médico que te interessa
              </h2>
            </div>
            
            <div className="space-y-4">
              {doctors.map((doctor) => (
                <div 
                  key={doctor.id}
                  className={`border rounded-lg p-4 flex justify-between items-center transition-all duration-200 cursor-pointer ${
                    selectedDoctor === doctor.id 
                      ? "border-vidaplus-red bg-vidaplus-light" 
                      : "border-gray-200 hover:border-vidaplus-salmon"
                  }`}
                  onClick={() => handleDoctorSelect(doctor.id)}
                >
                  <div>
                    <h3 className="font-medium">{doctor.name}</h3>
                    <p className="text-gray-600 text-sm">{doctor.specialty}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-vidaplus-red hover:text-red-700 hover:bg-transparent p-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDoctorSelect(doctor.id);
                    }}
                  >
                    <ArrowRight size={20} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
          
          {selectedDoctor && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Selecione uma data disponível</h2>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  className="rounded-md border"
                  disabled={(date) => {
                    // Disable past dates and weekends for demonstration
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const day = date.getDay();
                    return date < today || day === 0 || day === 6;
                  }}
                />
                
                {selectedDate && (
                  <div className="mt-6">
                    <Button 
                      className="vida-btn w-full" 
                      onClick={handleSchedule}
                    >
                      Confirmar Agendamento
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Detalhes do médico</h2>
                
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                      alt="Doctor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-lg font-medium">
                    {doctors.find(d => d.id === selectedDoctor)?.name}
                  </h3>
                  <p className="text-gray-600">
                    {doctors.find(d => d.id === selectedDoctor)?.specialty}
                  </p>
                  
                  <div className="mt-4 text-left w-full">
                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-600 mb-1">CRM: 12345-SP</p>
                      <p className="text-sm text-gray-600 mb-3">Formação: USP Medicina</p>
                      
                      <h4 className="font-medium mb-2">Biografia</h4>
                      <p className="text-sm text-gray-700">
                        Médico formado há 15 anos com experiência em atendimento clínico geral.
                        Especializado em tratamentos preventivos e medicina de família.
                        Atua na Vida Plus há 5 anos com excelente avaliação dos pacientes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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

export default SchedulePage;
