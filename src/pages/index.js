import styled from "styled-components";
import Card from "@/components/card"; // Verifique o caminho correto para o componente Card.
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";
import { getMetahumans } from "./services/metahumans-api";

export default function Home() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const metahumans = await getMetahumans();
      console.log(metahumans);
      setHeroes(metahumans);
    }
    fetchData();
  }, []);

  return (
    <main>
      <Content>
        <Sidebar />
        <Cards>
          {heroes.map((hero) => (
            <div key={hero.id}>
              <Card hero={hero} />
            </div>
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
