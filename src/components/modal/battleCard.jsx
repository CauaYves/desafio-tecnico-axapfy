import styled from "styled-components";

export default function BattleCard({ hero, side }) {
  const { powerstats } = hero;
  return (
    <Main side={side}>
      <div>
        <div>
          <img src={hero.images.sm} alt={hero.name} />
        </div>
        <div>
          <Stats>{powerstats.combat}</Stats>
          <Stats>{powerstats.durability}</Stats>
          <Stats>{powerstats.intelligence}</Stats>
          <Stats>{powerstats.power}</Stats>
          <Stats>{powerstats.speed}</Stats>
          <Stats>{powerstats.strength}</Stats>
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
