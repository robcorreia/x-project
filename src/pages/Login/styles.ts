import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.white};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  .supportMessage {
    color: ${(props) => props.theme["red-500"]};
    font-size: 0.8rem;
    align-self: flex-start;
    margin-left: 5px;
  }

  input {
    display: block;
    width: 100%;
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    margin-top: 0.5rem;
  }

  button {
    font-size: 1.2rem;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 0.8rem;
    background: ${(props) => props.theme["red-300"]};
    color: ${(props) => props.theme.white};
    cursor: pointer;
    transition: 0.2s;
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      opacity: 0.7;
    }
  }
`;
