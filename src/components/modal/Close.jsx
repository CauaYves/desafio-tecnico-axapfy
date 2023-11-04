import styled from "styled-components";

export default function Close() {
  return (
    <Main>
      <p>+</p>
    </Main>
  );
}

const Main = styled.div`
  font-size: 30px;
  font-weight: 800;

  width: 35px;
  height: min-content;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
  border-radius: 5px;
  p {
    transform: rotate(45deg);
  }
`;
