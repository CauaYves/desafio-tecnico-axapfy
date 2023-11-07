import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "@/components/card";
import Sidebar from "@/components/sidebar";
import Modal from "@/components/modal";
import { getMetahumans } from "../services/metahumans-api";
import COLORS from "@/constants/colors";
import Searchbar from "@/components/searchbar";
import { useHeroesSearchContext } from "@/context";

export default function Home() {
  const { input } = useHeroesSearchContext();
  const [heroesArr, setHeroesArr] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const metahumans = await getMetahumans();
      setHeroesArr(metahumans);
    };
    fetchData();
  }, []);

  const filteredHeroes = heroesArr.filter((hero) =>
    hero.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <>
      <Main color={COLORS.sixty}>
        {modalOpen && <Modal setModalOpen={setModalOpen} />}
        <Content>
          <Sidebar />
          <Cards>
            {filteredHeroes.map((hero) => (
              <Card key={hero.id} hero={hero} setModalOpen={setModalOpen} />
            ))}
          </Cards>
        </Content>
        <Searchbar />
      </Main>
    </>
  );
}
const Main = styled.main`
  background-color: ${(props) => props.color};
  display: flex;
  min-height: 100vh;
`;
const Content = styled.div``;

const Cards = styled.div`
  margin-left: 140px;
  width: calc(100vw - 350px);
  display: flex;
  flex-wrap: wrap;
`;
