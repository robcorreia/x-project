import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { useAuth } from "../../contexts/AuthContext";
import { HomeContainer } from "./styles";

function Home() {
  return (
    <HomeContainer>
      <Header />
      <Outlet />
    </HomeContainer>
  );
}

export default Home;
