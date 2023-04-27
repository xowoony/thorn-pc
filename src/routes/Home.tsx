import styled from "styled-components";
import "../routes/Home.css";
import { useState } from "react";

const Container = styled.div`
  height: 100%;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const Item = styled.div`
  margin: 0.2rem 0.1rem;
  width: 5rem;
  height: 5.2rem;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  &:hover {
    background-color: #00000059;
    border: 0.0625rem dotted black;
  }
`;

const Thc = styled.img`
  width: 3.5rme;
  height: 3.5rem;
  padding: 0.15rem;
`;

const Text = styled.div`
  font-size: 0.8rem;
  font-weight: 100;
  margin-top: 0.5rem;
  font-family: "Cormorant Garamond", serif;
`;

const Footer = styled.footer`
  background-color: rgb(186 186 186);
  box-shadow: 0px 4px 3px 7px #ffffff;
  color: rgb(138, 138, 138);
  font-family: ChosunNm, serif;
  font-size: 1rem;
  font-weight: 700;
  bottom: 0px;
  left: 0px;
  right: 0px;
  position: fixed;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  white-space: nowrap;
  z-index: 2;
  height: 2.3rem;
`;

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const onDblClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setShowPopup(true);
  }

  return (
    <Container>
      <Main>
        <Item onDoubleClick={onDblClick}>
          <Thc src="d.jpg" alt="" />
          <Text>Thorn Coin</Text>
        </Item>
        {showPopup ? (<div>짜잔</div>) : null}
      </Main>
      <Footer>2</Footer>
    </Container>
  );
}

export default Home;
