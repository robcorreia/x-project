import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { HomeContainer } from "./styles";

function Home() {
  const userActive = sessionStorage.getItem("user");

  useEffect(() => {
    if (!userActive) {
      <Navigate to="/" replace />;
    }
  }, [userActive]);
  return (
    <HomeContainer>
      <h2>Home</h2>
    </HomeContainer>
  );
}

export default Home;
