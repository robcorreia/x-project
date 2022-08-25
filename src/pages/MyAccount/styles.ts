import styled from "styled-components";

export const MyAccountContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 2rem auto auto auto;
  background-color: ${(props) => props.theme["gray-900"]};
  padding: 2rem;
  border-radius: 4px;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;
