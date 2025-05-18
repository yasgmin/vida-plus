
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  name: string;
  cpf: string;
  password: string;
  email: string;
  birthDate: string;
};

const RegisterForm = () => {
  const { register: registerUser } = useAuth();
  const [userType, setUserType] = useState<"patient" | "staff">("patient");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const success = await registerUser({
        ...data,
        name: "",
        userType,
      });
      
      if (success) {
        toast({
          title: "Cadastro realizado com sucesso",
          description: "Bem-vindo ao Vida Plus!",
        });
        navigate(userType === "patient" ? "/help" : "/dashboard");
      } else {
        toast({
          title: "Erro no cadastro",
          description: "Ocorreu um erro. Tente novamente.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro no cadastro",
        description: "Ocorreu um erro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-vidaplus-red mb-6">Cadastre-se</h2>
      <p className="text-center mb-6">Insira suas informações para se registrar!</p>

      <div className="mb-6">
        <div className="flex rounded-t-lg overflow-hidden border-b">
          <button
            onClick={() => setUserType("patient")}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
              userType === "patient"
                ? "bg-white text-vidaplus-red"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            Pacientes e Visitantes
          </button>
          <button
            onClick={() => setUserType("staff")}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
              userType === "staff"
                ? "bg-white text-vidaplus-red"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            Médicos e Profissionais da Saúde
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
          <Label htmlFor="name">Nome Completo:</Label>
          <Input
            id="name"
            type="text"
            placeholder="Digite seu Nome Completo"
            {...register("name", {
              required: "Senha é obrigatória",
              minLength: {
                value: 3,
                message: "O nome deve ter pelo menos 3 caracteres.",
              },
            })}
            className={errors.cpf ? "border-red-500" : ""}
          />
          {errors.cpf && (
            <p className="text-red-500 text-sm">{errors.cpf.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="cpf">CPF:</Label>
          <Input
            id="cpf"
            type="text"
            placeholder="Digite seu CPF"
            {...register("cpf", {
              required: "CPF é obrigatório",
              pattern: {
                value: /^\d{11}$/,
                message: "CPF deve conter 11 dígitos",
              },
            })}
            className={errors.cpf ? "border-red-500" : ""}
          />
          {errors.cpf && (
            <p className="text-red-500 text-sm">{errors.cpf.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Senha:</Label>
          <Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            {...register("password", {
              required: "Senha é obrigatória",
              minLength: {
                value: 6,
                message: "Senha deve ter pelo menos 6 caracteres",
              },
            })}
            className={errors.password ? "border-red-500" : ""}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email:</Label>
          <Input
            id="email"
            type="email"
            placeholder="Digite seu email"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido",
              },
            })}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="birthDate">Data de nascimento:</Label>
          <Input
            id="birthDate"
            type="date"
            {...register("birthDate", {
              required: "Data de nascimento é obrigatória",
            })}
            className={errors.birthDate ? "border-red-500" : ""}
          />
          {errors.birthDate && (
            <p className="text-red-500 text-sm">{errors.birthDate.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-vidaplus-red hover:bg-red-600 text-white py-2 rounded-md transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "Registrando..." : "Registrar"}
        </Button>
      </form>

      <div className="mt-4 text-center">
        <p>
          Já tem uma conta?{" "}
          <Link to="/login" className="text-vidaplus-red hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
