import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHeroesContext } from "@/context/HeroesContext";
import Card from "@/components/card";
import Sidebar from "@/components/sidebar";
import Modal from "@/components/modal";
import { getMetahumans } from "./services/metahumans-api";

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
    <main>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}

      <Content>
        <Sidebar />
        <Cards>
          {heroesArr.map((hero) => (
            <Card key={hero.id} hero={hero} setModalOpen={setModalOpen} />
          ))}
        </Cards>
      </Content>
    </main>
  );
}

const Content = styled.div``;

const Cards = styled.div`
  background-color: #40ff0044;
  margin-left: 100px;
  width: calc(100vw - 300px);
  display: flex;
  flex-wrap: wrap;
`;
