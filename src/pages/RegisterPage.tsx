
import Header from "@/components/Header";
import RegisterForm from "@/components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            {/* <h1 className="text-3xl font-bold text-vidaplus-red">Cadastre-se</h1>
            <p className="mt-2 text-gray-600">Insira suas informações para se registrar!</p> */}
          </div>
          
          <RegisterForm />
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">Desenvolvido por - Yasmin Gonçalves</p>
        </div>
      </footer>
    </div>
  );
};

export default RegisterPage;
