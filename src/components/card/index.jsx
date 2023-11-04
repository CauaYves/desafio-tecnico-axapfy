import styled from "styled-components";
import { useHeroesContext } from "@/context/HeroesContext";

export default function Card({ hero, setModalOpen }) {
  const { images, name } = hero;
  const { heroes, setHeroes } = useHeroesContext();

  return (
    <Main
      onClick={() => {
        if (heroes.length === 1) {
          setHeroes([...heroes, hero]);
          setModalOpen(true);
        } else {
          setHeroes([...heroes, hero]);
        }
      }}
    >
      <Top>
        <ImageWrapper>
          <img src={images.sm} alt="hero" />
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
