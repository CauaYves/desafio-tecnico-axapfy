import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHeroesContext } from "@/context/HeroesContext";
import Card from "@/components/card";
import Sidebar from "@/components/sidebar";
import Modal from "@/components/modal";
import { getMetahumans } from "./services/metahumans-api";
import COLORS from "@/constants/colors";

export default function Home() {
  const [heroesArr, setHeroesArr] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const { heroes, setHeroes } = useHeroesContext();

  console.log(heroes);
  useEffect(() => {
    const fetchData = async () => {
      const metahumans = await getMetahumans();
      setHeroesArr(metahumans);
    };
    fetchData();
  }, []);

  return (
    <Main color={COLORS.sixty}>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}

      <Content>
        <Sidebar />
        <Cards>
          {heroesArr.map((hero) => (
            <Card key={hero.id} hero={hero} setModalOpen={setModalOpen} />
          ))}
        </Cards>
      </Content>
    </Main>
  );
}
const Main = styled.main`
  background-color: ${(props) => props.color};
`;
const Content = styled.div``;

const Cards = styled.div`
  margin-left: 150px;
  width: calc(100vw - 150px);
  display: flex;
  flex-wrap: wrap;
`;
