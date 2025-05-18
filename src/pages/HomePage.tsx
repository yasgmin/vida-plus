import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Calendar, FileText, HeartPulse, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Saiba tudo que a Vida Plus oferece para cuidar da sua saúde.
                </h1>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-200 hover:shadow-lg hover:scale-105">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-vidaplus-red p-3 rounded-md text-white mb-3">
                        <Stethoscope size={24} />
                      </div>
                      <span className="font-medium">Encontre um médico</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-200 hover:shadow-lg hover:scale-105">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-vidaplus-red p-3 rounded-md text-white mb-3">
                        <Calendar size={24} />
                      </div>
                      <span className="font-medium">Agende seus exames</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-200 hover:shadow-lg hover:scale-105">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-vidaplus-red p-3 rounded-md text-white mb-3">
                        <HeartPulse size={24} />
                      </div>
                      <span className="font-medium">Pronto Atendimento</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-4 transition-all duration-200 hover:shadow-lg hover:scale-105">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-vidaplus-red p-3 rounded-md text-white mb-3">
                        <FileText size={24} />
                      </div>
                      <span className="font-medium">Resultados de Exames</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-300">
                    <img
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      alt="Senior man at doctor"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-vidaplus-red text-white p-6 rounded-tl-lg">
                  <div className="max-w-xs">
                    <p className="text-lg font-medium mb-2">
                      Não deixe para depois. Agende seus exames!
                    </p>
                    <Button
                      variant="outline"
                      className="border-white text-vidaplus-red hover:bg-vidaplus-red hover:text-white"
                    >
                      Agende aqui
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-vidaplus-salmon">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white mb-12">
              <h2 className="text-3xl font-bold mb-2">Serviços para você</h2>
              <p>Priorize sua saúde.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-col h-full">
                  <div className="bg-vidaplus-red text-white p-4 rounded-md w-16 h-16 flex items-center justify-center mb-6">
                    <HeartPulse size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Telemedicina</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Consultas com especialistas, a qualquer hora e de forma remota.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-col h-full">
                  <div className="bg-vidaplus-red text-white p-4 rounded-md w-16 h-16 flex items-center justify-center mb-6">
                    <Calendar size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Vida Plus até você</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    O atendimento médico da Vida Plus onde você estiver.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-col h-full">
                  <div className="bg-vidaplus-red text-white p-4 rounded-md w-16 h-16 flex items-center justify-center mb-6">
                    <FileText size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Exames e procedimentos</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Atendimento de acordo com as suas necessidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-vidaplus-red">
              Nossas especialidades
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-vidaplus-red text-white rounded-lg shadow-lg p-6 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white text-vidaplus-red p-3 rounded-full mb-4">
                    <Stethoscope size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Oftalmologista</h3>
                  <p className="text-white/90">
                    Venha fazer uma avaliação dos seus olhos.
                  </p>
                </div>
              </div>

              <div className="bg-vidaplus-red text-white rounded-lg shadow-lg p-6 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white text-vidaplus-red p-3 rounded-full mb-4">
                    <HeartPulse size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cardiologista</h3>
                  <p className="text-white/90">
                    Sempre importante checar como seu coração está.
                  </p>
                </div>
              </div>

              <div className="bg-vidaplus-red text-white rounded-lg shadow-lg p-6 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white text-vidaplus-red p-3 rounded-full mb-4">
                    <Stethoscope size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Psiquiatra</h3>
                  <p className="text-white/90">
                    Especialistas aptos para te diagnosticar corretamente.
                  </p>
                </div>
              </div>

              <div className="bg-vidaplus-red text-white rounded-lg shadow-lg p-6 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white text-vidaplus-red p-3 rounded-full mb-4">
                    <Stethoscope size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Neurologista</h3>
                  <p className="text-white/90">
                    Não deixe pra última hora. Seu cérebro também importa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Units Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-vidaplus-red">
              Unidades
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1588773846628-be8af06854b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Vida Plus Sorocaba"
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 border-t">
                  <h3 className="text-xl font-bold mb-2">Vida Plus Sorocaba</h3>
                  <div className="flex items-start mb-2">
                    <span className="text-vidaplus-red mr-2">➤</span>
                    <p>Rua Angelino Miguel, 324 - Jardim Sirius</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-vidaplus-red mr-2">☎</span>
                    <p>(15) 82131-3344</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1587351021759-3e566b3db4fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Vida Plus Votorantim"
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 border-t">
                  <h3 className="text-xl font-bold mb-2">Vida Plus Votorantim</h3>
                  <div className="flex items-start mb-2">
                    <span className="text-vidaplus-red mr-2">➤</span>
                    <p>Rua Angelino Miguel, 324 - Jardim Sirius</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-vidaplus-red mr-2">☎</span>
                    <p>(15) 82131-3344</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-vidaplus-red">
              Fale Conosco
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <h3 className="text-xl font-semibold mb-6">Alguma dúvida? Fale conosco.</h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome:</Label>
                    <Input id="name" type="text" className="w-full" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email:</Label>
                    <Input id="email" type="email" className="w-full" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone:</Label>
                    <Input id="phone" type="tel" className="w-full" />
                  </div>
                  <div>
                    <Label htmlFor="message">Explique o motivo do contato:</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    ></Textarea>
                  </div>
                  <Button className="vida-btn w-full">Enviar</Button>
                </form>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contatos:</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-vidaplus-red font-bold mr-2">☎</span>
                    <div>
                      <p className="font-semibold">Seg-sexta</p>
                      <p>(15) 82131-3344</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-vidaplus-red font-bold mr-2">☎</span>
                    <div>
                      <p className="font-semibold">Madrugada e finais de semana</p>
                      <p>(15) 92131-3344</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Contact Support"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">Desenvolvido por - Yasmin Gonçalves</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
