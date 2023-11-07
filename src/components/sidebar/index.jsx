import styled from "styled-components";
import Image from "next/image";
import COLORS from "@/constants/colors";
import user from "../../../public/user.png";
import planet from "../../../public/planet.png";

export default function Sidebar() {
  return (
    <Main sixty={COLORS.sixty_adjust}>
      <ProfileWrapper>
        <Image src={user} alt="profile" />
        <i>
          <p>{"RICARDO"}</p>
        </i>
      </ProfileWrapper>

      <Selection>
        <div>
          <Image src={planet} alt="cards" width={20} />
          <p>Cartas</p>
        </div>
      </Selection>
    </Main>
  );
}

const Main = styled.div`
  background-color: ${(props) => props.sixty};
  box-shadow: 2px 1px 5px #3f3f3fa6;
  width: 120px;
  position: fixed;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 0px 8px;
`;
const ProfileWrapper = styled.div`
  padding-top: 10px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-family: "Luckiest Guy", Verdana, Geneva, Tahoma, sans-serif;
  }
`;

const Selection = styled.div`
  background-color: #7b00ff;

  border-radius: 10px;
  width: 100%;

  div {
    display: flex;
    justify-content: space-around;
    padding: 8px 10px;
  }
`;
