import { SignOut } from "phosphor-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { HeaderComponent } from "./styles";

export function Header() {
  const { logout } = useAuth();

  return (
    <HeaderComponent>
      <strong className="brand">Brand</strong>
      <nav>
        <ul>
          <li>
            <Link to="/products">Produtos</Link>
          </li>
          <li>
            <Link to="/my-account">Minha Conta</Link>
          </li>
          <li>
            <button type="button" onClick={logout}>
              Sair
              <SignOut size={16} weight="bold" />
            </button>
          </li>
        </ul>
      </nav>
    </HeaderComponent>
  );
}
