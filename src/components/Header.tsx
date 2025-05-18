
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { AlignRight, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-black">VP</span>
                <span className="text-vidaplus-red">+</span>
              </span>
              <span className="ml-1 text-lg font-semibold">
                <span className="text-black">Vida</span>
                <span className="text-black">Plus</span>
              </span>
            </div>
          </Link>

          {}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-vidaplus-red transition-colors">
              Serviços
            </Link>
            <Link to="/" className="text-gray-700 hover:text-vidaplus-red transition-colors">
              Saúde e bem-estar
            </Link>
            <Link to="/" className="text-gray-700 hover:text-vidaplus-red transition-colors">
              Unidades
            </Link>
            <Link to="/" className="text-gray-700 hover:text-vidaplus-red transition-colors">
              Central de atendimento
            </Link>
          </nav>

          {}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center">
                <span className="mr-2">Olá, {user.name.split(' ')[0]}</span>
                <Button
                  onClick={handleLogout}
                  className="vida-btn"
                >
                  Sair
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button className="vida-btn">
                  Meu Vida Plus
                </Button>
              </Link>
            )}
          </div>

          {}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X /> : <AlignRight />}
            </button>
          </div>
        </div>
      </div>

      {}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-in">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link to="/" className="block py-2 text-gray-700 hover:text-vidaplus-red" onClick={toggleMenu}>
              Serviços
            </Link>
            <Link to="/" className="block py-2 text-gray-700 hover:text-vidaplus-red" onClick={toggleMenu}>
              Saúde e bem-estar
            </Link>
            <Link to="/" className="block py-2 text-gray-700 hover:text-vidaplus-red" onClick={toggleMenu}>
              Unidades
            </Link>
            <Link to="/" className="block py-2 text-gray-700 hover:text-vidaplus-red" onClick={toggleMenu}>
              Central de atendimento
            </Link>

            {user ? (
              <div className="py-2">
                <span className="block mb-2">Olá, {user.name.split(' ')[0]}</span>
                <Button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="w-full vida-btn"
                >
                  Sair
                </Button>
              </div>
            ) : (
              <Link to="/login" className="block py-2" onClick={toggleMenu}>
                <Button className="w-full vida-btn">
                  Meu Vida Plus
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
