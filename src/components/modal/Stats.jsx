import Image from "next/image";
import downIcon from "../../../public/triangle-red.png";
import upIcon from "../../../public/triangle-green.png";
import styled from "styled-components";

export default function Stats({ stats, side, result }) {
  const isRow = side === "row";
  const icon = result ? (isRow ? downIcon : upIcon) : isRow ? upIcon : downIcon;

  return (
    <Main>
      {stats}
      <Image src={icon} alt="stats" width={10} />
    </Main>
  );
}

const Main = styled.p`
  margin: 0px 10px;
  img {
    margin-left: 10px;
  }
`;
