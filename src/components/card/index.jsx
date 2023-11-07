/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Image from "next/image";
import { useHeroesContext } from "@/context/HeroesContext";
import sword from "../../../public/sword.png";
import { calculateTotalPower, calculateCardColor } from "@/utils";
import COLORS from "@/constants/colors";

export default function Card({ hero, setModalOpen }) {
  const { images, name } = hero;
  const { heroes, setHeroes } = useHeroesContext();
  const totalPower = calculateTotalPower(hero.powerstats);
  const color = calculateCardColor(totalPower);

  return (
    <Main
      background={COLORS.sixty}
      onClick={() => {
        if (heroes.length === 1) {
          setHeroes([...heroes, hero]);
          setModalOpen(true);
        } else {
          setHeroes([...heroes, hero]);
        }
      }}
    >
      <Gradient color={color}>
        <Content>
          <Top>
            <ImageWrapper color={color}>
              <img src={images.sm} alt="hero" />
            </ImageWrapper>
          </Top>
          <div>
            <i>
              <p>{name}</p>
            </i>
            <Power>
              <Image src={sword} alt="power" width={20} />
              <p> {totalPower}</p>
            </Power>
          </div>
        </Content>
      </Gradient>
    </Main>
  );
}
const Main = styled.div`
  width: 170px;
  height: 250px;
  margin: 20px;
  position: relative;
`;
const Gradient = styled.div`
  border-radius: 10px;
  background-image: linear-gradient(
    55deg,
    #7a7a7a80,
    ${(props) => props.color},
    #6f6f6f78
  );
  padding: 2px;
`;
const Content = styled.div`
  border-radius: 10px;
  background-color: #232323;
  div {
    text-align: center;
    p {
      font-family: "Luckiest Guy", Verdana, Geneva, Tahoma, sans-serif;
      font-size: small;
      text-transform: uppercase;
      margin-top: 10px;
    }
  }
  overflow: hidden;
`;
const Power = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    padding-bottom: 10px;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 45px ${(props) => props.color};
  border-radius: 0px 0px 10px 10px;
  img {
    border-radius: 0px 0px 10px 10px;
    height: 180px;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
