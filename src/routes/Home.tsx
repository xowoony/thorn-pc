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
  margin: 0.2rem 0.1rem 1rem;
  width: 5rem;
  height: 5.2rem;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    background-color: #00000059;
    border: 0.0625rem dotted black;
  }
`;

const Thc = styled.img`
  width: 3.5rem;
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
  position: fixed;
  top: 0;
  margin-top: 3rem;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Popup = styled.div`
  box-shadow: 2px 3px 9px;
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

const Title = styled.div`
  font-weight: 100;
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
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  padding: 0.2rem;
`;

const TextBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const PjTitle = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  padding: 2rem;
  font-family: "Noto Serif KR", serif;
`;

// 프로젝트명, 개발인원, 프로젝트 설명..
const SubTitleContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
  margin-top: 2rem;

  font-weight: 600;
`;

const SubTitle = styled.div`
  font-size: 0.9rem;
  padding: 0.5rem;
  background-color: rgb(233 230 227);
  margin-left: 3rem;
  border-left: 6px solid rgb(0, 0, 0);
`;

const PjItrTitle = styled.h1`
  margin-bottom: 1rem;
  color: brown;
  font-family: "Do Hyeon", sans-serif;
  font-size: 1.6rem;
`;

const EtbImage = styled.img`
  width: 36rem;
  height: 16rem;
  margin-bottom: 3rem;
`;

const Context = styled.div`
  font-weight: 400;
  width: 100%;
  div {
    margin-left: 7rem;
  }
`;

const IntroSection = styled.div`
  background-color: #fafafa;
  margin-bottom: 5rem;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Video = styled.video`
  width: 40rem;
  height: 22rem;
  margin: 1rem;
`;

const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  white-space: nowrap;
  z-index: 2;
  height: 2.3rem;
`;

function Home() {
  // THC
  const [showThcPopup, setshowThcPopup] = useState(false);
  const onThcDblClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setshowThcPopup(true);
  };
  const onThcClosePopup = () => {
    setshowThcPopup(false);
  };

  // THORN TO DO
  const [showTtdPopup, setshowTtdPopup] = useState(false);
  const onTtdDblClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setshowTtdPopup(true);
  };
  const onTtdClosePopup = () => {
    setshowTtdPopup(false);
  };

  // 잔이비어
  const [showEtbPopup, setshowEtbPopup] = useState(false);
  const onEtbDblClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setshowEtbPopup(true);
  };
  const onEtbClosePopup = () => {
    setshowEtbPopup(false);
  };

  return (
    <Container>
      <Main>
        {/* 아이콘들 */}
        <Item onDoubleClick={onThcDblClick}>
          <Thc src="thc.jpg" alt="" />
          <Text>Thorn Coin</Text>
        </Item>
        <Item onDoubleClick={onTtdDblClick}>
          <Thc src="ttd.jpg" alt="" />
          <Text>THORN TO DO</Text>
        </Item>
        <Item onDoubleClick={onEtbDblClick}>
          <Thc src="etb.jpg" alt="" />
          <Text>잔이비어</Text>
        </Item>

        {/* 각각의 아이콘 클릭했을 때 나타날 팝업창들 */}
        {/* 1. Thorn Coin */}
        {showThcPopup ? (
          <PopupContainer>
            <Popup>
              <ThcHeader>
                <ThcTitle>
                  <Title>Thorn Coin</Title>
                  <CloseButton onClick={onThcClosePopup}>X</CloseButton>
                </ThcTitle>
              </ThcHeader>
              <TextContainer>
                <TextBox>
                  <PjTitle>Thorn Coin</PjTitle>
                  <PjItrTitle>프로젝트 소개</PjItrTitle>
                  <EtbImage src="etb-home.jpg" alt="" />
                  <Video controls src="etb-home.mp4"></Video>
                </TextBox>
              </TextContainer>
            </Popup>
          </PopupContainer>
        ) : null}
        {/* THORN TO DO */}
        {showTtdPopup ? (
          <PopupContainer>
            <Popup>
              <ThcHeader>
                <ThcTitle>
                  <Title>THORN TO DO</Title>
                  <CloseButton onClick={onTtdClosePopup}>X</CloseButton>
                </ThcTitle>
              </ThcHeader>
              <TextContainer>
                <h1>THORN TO DO</h1>
              </TextContainer>
            </Popup>
          </PopupContainer>
        ) : null}
        {/* 잔이비어 */}
        {showEtbPopup ? (
          <PopupContainer>
            <Popup>
              <ThcHeader>
                <ThcTitle>
                  <Title>잔이비어</Title>
                  <CloseButton onClick={onEtbClosePopup}>X</CloseButton>
                </ThcTitle>
              </ThcHeader>
              <TextContainer>
                <TextBox>
                  <PjTitle>잔이비어</PjTitle>
                  <EtbImage src="etb-home.jpg" alt="" />
                  <PjItrTitle>프로젝트 소개</PjItrTitle>
                  <IntroSection>
                    <SubTitleContainer>
                      <SubTitle>프로젝트명</SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>잔이비어</div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle>개발 인원</SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>3인</div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle>프로젝트 설명</SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        맥주만을 위한 커뮤니티를 기획 및 구현하여
                        <br />
                        새로운 소셜 네트워크를 구축한 서비스입니다.
                        <br />
                        맥주 관련 정보와 사용자 후기를 간편하게 조회할 수
                        있으며,
                        <br />
                        인기 맥주 동향 파악과 더불어 사용자들 간의 모임 추진 등
                        <br />
                        다양한 커뮤니티 활동이 가능하게 구현하였습니다.
                      </div>
                    </Context>
                    <SubTitleContainer></SubTitleContainer>
                  </IntroSection>
                  <PjItrTitle>구현영상 & 상세기여 설명</PjItrTitle>
                  <SubTitleContainer>
                    <SubTitle>Home</SubTitle>
                  </SubTitleContainer>
                  <Video controls src="etb-home.mp4"></Video>
                </TextBox>
              </TextContainer>
            </Popup>
          </PopupContainer>
        ) : null}
      </Main>
      <Footer>2</Footer>
    </Container>
  );
}

export default Home;
