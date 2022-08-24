import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { useAuth } from "../../contexts/AuthContext";
import { HomeContainer } from "./styles";

function Home() {
  const { user } = useAuth();

  const userActive = sessionStorage.getItem("user");

  useEffect(() => {
    if (!userActive) {
      <Navigate to="/" replace />;
    }
  }, [userActive]);
  return (
    <HomeContainer>
      <Header />
      <h2>Bem vindo {user.email}</h2>
    </HomeContainer>
  );
}

export default Home;
