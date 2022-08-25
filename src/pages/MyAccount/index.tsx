import { useAuth } from "../../contexts/AuthContext";
import { MyAccountContainer } from "./styles";

export function MyAccount() {
  const { user } = useAuth();
  return (
    <MyAccountContainer>
      <h2>Meus dados</h2>
      <p>
        <strong>E-mail: </strong>
        {user.email}
      </p>
    </MyAccountContainer>
  );
}
