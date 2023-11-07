import styled from "styled-components";
import SearchInput from "./input";

export default function Searchbar() {
  return (
    <Main>
      <SearchInput />
    </Main>
  );
}

const Main = styled.div`
  margin: 30px 30px 0px 0px;
  position: fixed;
  top: 0;
  right: 0;
`;
