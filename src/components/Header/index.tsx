import { SignOut } from "phosphor-react";
import { useAuth } from "../../contexts/AuthContext";
import { HeaderComponent } from "./styles";
import logoImg from "../../assets/logo.svg";

export function Header() {
  const { logout } = useAuth();

  return (
    <HeaderComponent>
      <img className="brand" src={logoImg} alt="" />
      <nav>
        <ul>
          <li>
            <a href="/">Dados</a>
          </li>
          <li>
            <a href="/">Minha conta</a>
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
