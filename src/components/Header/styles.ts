import { ClockCounterClockwise } from "phosphor-react";
import styled from "styled-components";

export const HeaderComponent = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    height: auto;
    flex-direction: column;
  }

  .brand {
    color: ${(props) => props.theme["red-300"]};
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    list-style: none;
    align-items: center;

    li {
      padding: 0.5rem;

      button {
        border: none;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        border-radius: 4px;
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme["red-300"]};
        gap: 5px;
        font-weight: bold;
        cursor: pointer;
        transition: opacity 0.3s;

        &:hover {
          opacity: 0.6;
        }
      }

      a {
        padding: 0.5rem;
        font-weight: bold;
        transition: 0.3s;
        color: ${(props) => props.theme.white};
        text-decoration: none;

        &:hover {
          color: ${(props) => props.theme["red-300"]};
        }
      }
    }
  }
`;
