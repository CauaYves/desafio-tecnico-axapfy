import styled from "styled-components";
import Stats from "./Stats";

export default function BattleCard({ hero, side, result }) {
  const { powerstats } = hero;
  return (
    <Main side={side}>
      <div>
        <div>
          <img src={hero.images.sm} alt={hero.name} />
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
