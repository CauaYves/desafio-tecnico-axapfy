import styled from "styled-components";
import Stats from "./Stats";
import Image from "next/image";

export default function BattleCard({ hero, side, result }) {
  const { powerstats } = hero;
  return (
    <Main side={side}>
      <div>
        <div>
          <Image
            src={hero.images.sm}
            alt={hero.name}
            width={180}
            height={250}
          />
        </div>
        <div>
          <Stats
            stats={powerstats.intelligence}
            side={side}
            result={result.intelligence}
          />
          <Stats
            stats={powerstats.strength}
            side={side}
            result={result.strength}
          />
          <Stats stats={powerstats.speed} side={side} result={result.speed} />
          <Stats
            stats={powerstats.durability}
            side={side}
            result={result.durability}
          />
          <Stats stats={powerstats.power} side={side} result={result.power} />
          <Stats stats={powerstats.combat} side={side} result={result.combat} />
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
