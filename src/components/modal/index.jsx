import styled from "styled-components";
import Close from "./Close";
import { useHeroesContext } from "@/context/HeroesContext";
import BattleCard from "./battleCard";
import { useEffect, useState } from "react";
export default function Modal({
  setModalOpen,
  setFirstHeroId,
  setSecondHeroId,
}) {
  const { heroes, setHeroes } = useHeroesContext();

  return (
    <Main>
      <Battle>
        <IconWrapper
          onClick={() => {
            setModalOpen(false);
            setHeroes([]);
          }}
        >
          <Close />
        </IconWrapper>
        <BattleCard hero={heroes[0]} side="row" />
        <Winner>
          <h3>
            <span>Winner</span> Hulk
          </h3>
          <div>
            <p>Intelligence</p>
            <p>Strength</p>
            <p>Speed</p>
            <p>Durability</p>
            <p>Power</p>
            <p>Combat</p>
          </div>
        </Winner>
        <BattleCard hero={heroes[1]} side="row-reverse" />
      </Battle>
    </Main>
  );
}

const Main = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #fdfdfd89;

  position: fixed;
  transform: translate(50%, 50%);
  top: -50.1%;
  left: -50%;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
`;

const Battle = styled.div`
  background-color: #313131;
  width: calc(100vw - 10%);
  height: calc(100vh - 10%);

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Winner = styled.div`
  text-align: center;
  div {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    font-size: larger;
  }
  span {
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 15px;
  top: 10px;
`;
