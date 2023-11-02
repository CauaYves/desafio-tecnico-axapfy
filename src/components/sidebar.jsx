import styled from "styled-components";
import Image from "next/image";

export default function Sidebar() {
  return (
    <Main>
      <div>
        <img src="https://placehold.co/30" alt="profile" />
        <p>{"Username"}</p>
      </div>

      <div>
        <img src="https://placehold.co/30" alt="cards" />
        <p>Cartas</p>
      </div>
    </Main>
  );
}

const Main = styled.div`
  background-color: blue;
  width: 100px;
  position: fixed;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  div:first-child {
    background-color: #40ff00;
    margin-bottom: 80px;
  }
  div {
    display: flex;
    flex-direction: column;

    background-color: red;
  }
`;
