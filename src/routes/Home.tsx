import styled from "styled-components";
import "../routes/Home.css";
import { Link } from "react-router-dom";
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

const PopupContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ThcPopup = styled.div`
  overflow: scroll;
  margin-top: 3rem;
  background-color: white;
  width: 45rem;
  height: 29rem;
  color: black;
`;

const ThcHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 45rem;
  font-family: "Cormorant Garamond", serif;
  color: white;
  width: 45rem;
  height: 2rem;
  background-color: #b8b8b8;
  position: fixed;
  padding: 0.2rem;
`;

const ThcTitle = styled.div`
  padding: 0.1rem;
  height: 1.7rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #010169;
  width: 100%;
  font-size: 0.7rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 0.5rem;
`;

const TextContainer = styled.div`
  margin-top: 2rem;
  padding: 0.2rem;
`;

const CloseButton = styled.button`
  margin-left: auto;
  margin-right: 0.2rem;
  width: 1.2rem;
  height: 1.1rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: rgb(184, 184, 184);
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
  const onThcDblClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setShowPopup(true);
    event.preventDefault();
  };

  return (
    <Container>
      <Main>
        <Item onDoubleClick={onThcDblClick}>
          <Thc src="d.jpg" alt="" />
          <Text>Thorn Coin</Text>
        </Item>
        {showPopup ? (
          <PopupContainer>
            <ThcPopup>
              <ThcHeader>
                <ThcTitle>
                  <div>Thorn Coin</div>
                  <CloseButton>X</CloseButton>
                </ThcTitle>
              </ThcHeader>
              <TextContainer>
                <h1>정소운 천재v</h1>
              </TextContainer>
            </ThcPopup>
          </PopupContainer>
        ) : null}
      </Main>
      <Footer>2</Footer>
    </Container>
  );
}

export default Home;
