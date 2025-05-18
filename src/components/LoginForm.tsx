
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  cpf: string;
  password: string;
};

const LoginForm = () => {
  const { login } = useAuth();
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
      const success = await login(data.cpf, data.password, userType);
      if (success) {
        toast({
          title: "Login realizado com sucesso",
          description: "Bem-vindo de volta ao Vida Plus!",
        });
        navigate(userType === "patient" ? "/help" : "/dashboard");
      } else {
        toast({
          title: "Erro no login",
          description: "CPF ou senha incorretos. Tente novamente.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro no login",
        description: "Ocorreu um erro durante o login. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
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

        <Button
          type="submit"
          className="w-full bg-vidaplus-red hover:bg-red-600 text-white py-2 rounded-md transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "Entrando..." : "Logar"}
        </Button>
      </form>

      <div className="mt-4 text-center">
        <p>
          Não tem uma conta?{" "}
          <Link to="/register" className="text-vidaplus-red hover:underline">
            Registre-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
