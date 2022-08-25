import styled from "styled-components";

export const NotFoundPageContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme["red-300"]};
  }
`;
