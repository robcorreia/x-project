import styled from "styled-components";

export const DataContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const DataContent = styled.div`
  width: 100%;
  height: 70vh;
`;

export const SearchForm = styled.form`
  margin: 0.5rem 0;
  display: flex;
  gap: 0.5rem;

  input {
    background-color: transparent;
    border: none;
    flex: 1;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme["gray-300"]};
    padding: 0.5rem;
    color: ${(props) => props.theme.white};
  }

  button {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.6rem;
    gap: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s;
    border: none;
    border-radius: 4px;
    &:hover {
      background-color: ${(props) => props.theme["red-300"]};
      color: ${(props) => props.theme.white};
    }
  }
`;
