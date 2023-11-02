import Image from "next/image";
import styled from "styled-components";

export default function Card({ hero }) {
  const { images, name } = hero;
  return (
    <Main
      onClick={() => {
        console.log("batalha");
      }}
    >
      <Top>
        <ImageWrapper>
          <img src={images.sm} alt="developer" />
        </ImageWrapper>
      </Top>
      <p>{name}</p>
    </Main>
  );
}
const Main = styled.div`
  background-color: red;
  width: 200px;
  height: 250px;
  margin: 8px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: bisque;
  img {
    height: 180px;
  }
`;

const Top = styled.div`
  width: 100%;
  background-color: #146dba;
  display: flex;
  align-items: center;
  justify-content: center;
`;
