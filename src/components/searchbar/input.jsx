import styled from "styled-components";
import lupe from "../../../public/lupe.svg";
import Image from "next/image";
import { useHeroesSearchContext } from "@/context";

function SearchInput() {
  const { input, setInput } = useHeroesSearchContext();

  return (
    <Main>
      <Image src={lupe} alt="search" width={20} />
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </Main>
  );
}

export default SearchInput;

const Main = styled.div`
  border: 1px solid;
  border-color: #8c00ff;
  border-radius: 20px;
  padding: 7px;

  background-color: black;

  display: flex;
  align-items: center;

  &:focus {
    outline: 0;
  }
`;
const Input = styled.input`
  border: none;

  background-color: black;
  color: #ffffff;

  &:focus {
    outline: 0;
  }
`;
