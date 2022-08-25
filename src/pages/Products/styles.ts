import styled from "styled-components";

export const DataContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 2rem auto auto auto;
`;

export const DataContent = styled.div`
  width: 100%;
  height: 70vh;
  overflow-x: auto;

  h2 {
    font-size: 2rem;
    margin: 2rem 0;
  }
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

export const GridHeader = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  padding: 0.8rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 2fr 1fr;
  background: ${(props) => props.theme["red-300"]};
  text-align: center;
  border: 2px solid black;
  border-radius: 4px;
  font-weight: 500;
  color: black;
  gap: 2rem;

  h4 {
    color: ${(props) => props.theme.white};
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    grid-template-columns: initial;
    overflow-x: auto;
  }
`;
