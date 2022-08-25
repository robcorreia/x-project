import { Header } from "../../components/Header";
import { NotFoundPageContainer } from "./styles";

export function NotFoundPage() {
  return (
    <>
      <Header />
      <NotFoundPageContainer>
        <h2>Página não encontrada!</h2>
      </NotFoundPageContainer>
    </>
  );
}
