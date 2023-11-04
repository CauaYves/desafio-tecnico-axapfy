import styled from "styled-components";
import Image from "next/image";
import downIcon from "../../../public/triangle-red.png";
import upIcon from "../../../public/triangle-green.png";

export default function BattleCard({ hero, side, result }) {
  console.log(result);
  const { powerstats } = hero;
  return (
    <Main side={side}>
      <div>
        <div>
          <img src={hero.images.sm} alt={hero.name} />
        </div>
        <div>
          <Stats>
            {powerstats.intelligence}
            <Image
              src={
                result.intelligence
                  ? side === "row"
                    ? downIcon
                    : upIcon
                  : side !== "row"
                  ? downIcon
                  : upIcon
              }
              alt="stats"
              width={15}
            />
          </Stats>
          <Stats>
            {powerstats.strength}
            <Image
              src={
                result.strength
                  ? side === "row"
                    ? downIcon
                    : upIcon
                  : side !== "row"
                  ? downIcon
                  : upIcon
              }
              alt="stats"
              width={15}
            />
          </Stats>
          <Stats>
            {powerstats.speed}
            <Image
              src={
                result.speed
                  ? side === "row"
                    ? downIcon
                    : upIcon
                  : side !== "row"
                  ? downIcon
                  : upIcon
              }
              alt="stats"
              width={15}
            />
          </Stats>
          <Stats>
            {powerstats.durability}
            <Image
              src={
                result.durability
                  ? side === "row"
                    ? downIcon
                    : upIcon
                  : side !== "row"
                  ? downIcon
                  : upIcon
              }
              alt="stats"
              width={15}
            />
          </Stats>
          <Stats>
            {powerstats.power}
            <Image
              src={
                result.power
                  ? side === "row"
                    ? downIcon
                    : upIcon
                  : side !== "row"
                  ? downIcon
                  : upIcon
              }
              alt="stats"
              width={15}
            />
          </Stats>
          <Stats>
            {powerstats.combat}
            <Image
              src={
                result.combat
                  ? side === "row"
                    ? downIcon
                    : upIcon
                  : side !== "row"
                  ? downIcon
                  : upIcon
              }
              alt="stats"
              width={15}
            />
          </Stats>
        </div>
      </div>
      <h2>{hero.name}</h2>
    </Main>
  );
}

const Main = styled.div`
  div {
    display: flex;
    flex-direction: ${(props) => props.side};
    background-color: blue;
    margin: 4px;
    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
  }
  h2 {
    text-align: ${(props) => (props.side === "row" ? "left" : "right")};
  }
`;

const Stats = styled.p`
  font-size: larger;
`;
