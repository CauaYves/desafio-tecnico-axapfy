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

  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #452990;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #73649d78;
  cursor: pointer;
  p {
    transform: rotate(45deg);
    color: #f4eeee;
    margin-left: 5px;
  }
`;
