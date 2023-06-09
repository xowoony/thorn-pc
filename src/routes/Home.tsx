import styled from "styled-components";
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
  margin-top: 3.5rem;
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
  width: 50%;
  height: 29rem;
  color: black;
  max-width: 48rem;
  min-width: 21rem;
`;

const ThcHeader = styled.header`
  padding-bottom: 0.2rem;
  margin-bottom: 28.05rem;
  z-index: 2;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
  font-family: "Cormorant Garamond", serif;
  color: white;
  height: 2rem;
  background-color: #b8b8b8;
  position: fixed;
  padding: 0.2rem;
  max-width: 48rem;
  min-width: 21rem;
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
  @media screen and (max-width: 1090px) {
  }
`;

const TextBox = styled.div`
  width: 100%;
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
  color: black;
  border-width: 0.12rem;
  border-color: gray black black gray;
`;

const PjTitle = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-family: "Noto Serif KR", serif;
  box-shadow: rgb(220 100 100 / 25%) 0px -15px 0px inset;
  margin-top: 1.2rem;
  @media screen and (max-width: 1090px) {
    font-size: 27px;
  }
`;

const NfxNotice = styled.div`
  font-size: 0.8rem;
  padding: 2rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: tomato;
  @media screen and (max-width: 1090px) {
    font-size: 0.5rem;
  }
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
  background-color: rgb(233, 230, 227);
  margin-left: 3rem;
  border-left: 6px solid rgb(165 50 50);
  span {
    @media screen and (max-width: 1090px) {
      font-size: 0.2rem;
    }
  }
  @media screen and (max-width: 1090px) {
    margin-left: 12px;
    font-size: 0.5rem;
  }
`;

const PjItrTitle = styled.h1`
  margin: 5rem 0 1rem 0;
  color: brown;
  font-family: "Do Hyeon", sans-serif;
  font-size: 1.6rem;
`;

const EtbImage = styled.img`
  width: 36rem;
  height: 16rem;
  margin-top: 1rem;
  box-shadow: 2px 3px 9px gray;
  @media screen and (max-width: 1090px) {
    width: 18rem;
    height: 9.5rem;
  }
`;

const Context = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 400;
  width: 100%;
  font-size: 0.9rem;
  line-height: 25px;
  p {
    text-indent: 1.2rem;
    @media screen and (max-width: 1090px) {
      text-indent: 0;
    }
  }
  div {
    margin-left: 7rem;
    @media screen and (max-width: 1090px) {
      margin-left: 1rem;
      font-size: 0.7rem;
    }
  }
  span {
    box-shadow: inset 0 -10px 0 #edcdd770;
  }
  li {
    margin-bottom: 0.5rem;
  }
`;

const IntroSection = styled.div`
  padding: 2rem 0;
  background-color: #fafafa;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Video = styled.video`
  width: 35rem;
  height: 20rem;
  margin: 1rem;
  video[poster] {
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: 1090px) {
    width: 16rem;
    height: 9rem;
  }
`;

const RegisterImg = styled.img`
  width: 35.5rem;
  margin-left: 0.6rem;
  @media screen and (max-width: 1090px) {
    width: 16rem;
    height: 9rem;
  }
`;

const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
  button {
    border-width: 0.05rem 0.1rem 0.1rem 0.05rem;
    border-style: solid;
    border-color: white black black white;
    color: black;
    background-color: transparent;
    margin-left: 0.2rem;
    width: 4.3rem;
    height: 1.9rem;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;

    &:active {
      background-color: #0000002e;
    }
    img {
      width: 1.3rem;
      height: 1.2rem;
      margin-right: 0.4rem;
    }
    span {
      font-size: 0.88rem;
      font-weight: 600;
      font-family: "Gothic A1", sans-serif;
    }
  }
`;

const XownAbout = styled.p`
  font-size: 0.9rem;
  padding: 0px 3rem;
  font-weight: 500;
  line-height: 25px;
  margin-bottom: 6rem;
  margin-left: 2rem;
  margin-top: 1.5rem;
  @media screen and (max-width: 1090px) {
    font-size: 0.6rem;
    padding: 15px;
    margin-left: 0;
  }
`;

const SkillsIcon = styled.span`
  box-shadow: none;
  padding: 0.4rem;
  border-radius: 0.2rem;
  background-color: white;
  color: red;
  border: 0.0625rem solid;
  margin-left: 1.5rem;

  @media screen and (max-width: 1090px) {
    margin-right: 0.5rem;
    box-shadow: none;
    padding: 0.3rem;
    border-radius: 0.2rem;
    background-color: white;
    color: red;
    border: 0.0625rem solid;
    margin-left: 0;
    font-size: 0.7rem;
  }
`;

const EduContext = styled.div`
  font-size: 0.9rem;
  padding: 0px 7rem;
  font-weight: 500;
  line-height: 25px;
  margin-bottom: 5rem;
  margin-top: 4rem;

  @media screen and (max-width: 1090px) {
    font-size: 0.6rem;
    padding: 0px 2.5rem;
    margin-top: 2rem;
  }
`;

const QrImg = styled.img`
  width: 8.5rem;
  height: 8.5rem;
  filter: brightness(100);
  margin-right: 10rem;
  @media screen and (max-width: 1090px) {
    margin-right: 0;
    width: 5.5rem;
    height: 5.5rem;
    filter: brightness(100);
  }
`;

const ContactText = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: monospace;
  font-size: 16px;

  @media screen and (max-width: 1090px) {
    font-size: 10px;
  }
`;

const ContactLeft = styled.div`
  /* margin-left: 5rem; */
  @media screen and (max-width: 1090px) {
    margin-left: 2rem;
  }
`;

const ContactIcon1 = styled.span`
  margin-right: 2rem;

  i {
    font-size: 3rem;
    color: white;
    &:hover {
      color: #787878;
    }
    @media screen and (max-width: 1090px) {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 1090px) {
    margin-right: 1rem;
  }
`;

const ContactIcon2 = styled.span`
  margin-right: 1.5rem;

  i {
    font-size: 3rem;
    color: white;
    &:hover {
      color: #1a73e8;
    }
    @media screen and (max-width: 1090px) {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 1090px) {
    margin-right: 0.5rem;
  }
`;

const ContactIcon3 = styled.span`
  margin-right: 2rem;
  img {
    filter: brightness(100);
    width: 3.5rem;
    &:hover {
      filter: contrast(0.1);
    }
    @media screen and (max-width: 1090px) {
      width: 3rem;
    }
  }

  @media screen and (max-width: 1090px) {
    margin-right: 1rem;
  }
`;

const EtbStack = styled.div`
  font-family: "Do Hyeon";
  font-size: 0.9rem;
  color: black;
  margin-top: 1rem;
  margin-left: 0rem;

  @media screen {
    margin-left: 2rem;
  }
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

  // Trello
  const [showTrlPopup, setshowTrlPopup] = useState(false);
  const onTrlDblClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setshowTrlPopup(true);
  };
  const onTrlClosePopup = () => {
    setshowTrlPopup(false);
  };

  // Netflix
  const [showNfxPopup, setshowNfxPopup] = useState(false);
  const onNfxDblClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setshowNfxPopup(true);
  };
  const onNfxClosePopup = () => {
    setshowNfxPopup(false);
  };

  // xowoony
  const [showXownPopup, setshowXownPopup] = useState(false);
  const onXownDblClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setshowXownPopup(true);
  };
  const onXownClosePopup = () => {
    setshowXownPopup(false);
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
          <Text style={{ fontSize: "0.7rem" }}>THORN TO DO</Text>
        </Item>
        <Item onDoubleClick={onEtbDblClick}>
          <Thc src="etb.jpg" alt="" />
          <Text>잔이비어</Text>
        </Item>
        <Item onDoubleClick={onTrlDblClick}>
          <Thc src="Trello.jpg" alt="" />
          <Text>Trello</Text>
        </Item>
        <Item onDoubleClick={onNfxDblClick}>
          <Thc src="netflix.jpg" alt="" />
          <Text>Netflix Clone</Text>
        </Item>
        <Item onDoubleClick={onXownDblClick}>
          <Thc src="xown.jpg" alt="" />
          <Text>xowoony</Text>
        </Item>

        {/* 각각의 아이콘 클릭했을 때 나타날 팝업창들 */}
        {/* 1. Thorn Coin */}
        {showThcPopup ? (
          <PopupContainer>
            <ThcHeader>
              <ThcTitle>
                <Title>Thorn Coin</Title>
                <CloseButton onClick={onThcClosePopup}>X</CloseButton>
              </ThcTitle>
            </ThcHeader>
            <Popup>
              <TextContainer>
                <TextBox>
                  <PjTitle
                    style={{
                      boxShadow: "rgb(194 194 61 / 25%) 0px -15px 0px inset",
                    }}
                  >
                    Thorn Coin
                  </PjTitle>
                  <div
                    style={{
                      height: "3rem",
                      width: "10rem",
                      marginTop: "1rem",
                      alignItems: " center",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    {/* 깃허브 바로가기 */}
                    <a
                      style={{
                        width: "3.2rem",
                        height: "3rem",
                        marginRight: "2rem",
                      }}
                      href="https://github.com/xowoony/thorn-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ width: "3.2rem", height: "3rem" }}
                        src="github.jpg"
                        alt=""
                      />
                    </a>
                    {/* Thorn Coin 홈페이지 바로가기 */}
                    <a
                      style={{ width: "2.5rem", height: "2.5rem" }}
                      href="https://xowoony.github.io/thorn-coin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ width: "2.5rem", height: "2.5rem" }}
                        src="thc.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <EtbImage src="thc-home.jpg" alt="" />
                  <PjItrTitle style={{ color: "#8d823c" }}>
                    프로젝트 소개
                  </PjItrTitle>
                  <IntroSection>
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(179 159 103)" }}
                      >
                        프로젝트명
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>Thorn Coin</div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(179 159 103)" }}
                      >
                        개발 인원
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>1인 (개인 프로젝트)</div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(179 159 103)" }}
                      >
                        프로젝트 설명
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        코인 정보를 제공하는 사이트입니다.
                        <br />
                        실시간 인기 코인을 한눈에 볼 수 있으며,
                        <br />
                        <br />
                        상세 코인 페이지에서
                        <br />
                        실시간으로 바뀌는 가격정보와 차트정보를 확인할 수
                        있습니다.
                        <br />
                        Thorn Coin은 모바일 반응형으로 제작되었습니다.
                        <br />
                      </div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(179 159 103)" }}
                      >
                        사용 기술 스택
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div
                        style={{
                          fontFamily: "'Do Hyeon'",
                          fontSize: "0.9rem",
                          color: "black",
                          marginTop: "1rem",
                        }}
                      >
                        <span
                          style={{
                            marginRight: "1.2rem",
                            boxShadow: "none",
                            padding: "0.4rem",
                            borderRadius: "0.2rem",
                            backgroundColor: "white",
                            color: "#034cab",
                            border: "0.0625rem solid",
                          }}
                        >
                          Typescript
                        </span>
                        <span
                          style={{
                            marginRight: "1.2rem",
                            boxShadow: "none",
                            padding: "0.4rem",
                            borderRadius: "0.2rem",
                            backgroundColor: "white",
                            color: "#01b2da",
                            border: "0.0625rem solid",
                          }}
                        >
                          React
                        </span>
                        <span
                          style={{
                            marginRight: "1.2rem",
                            boxShadow: "none",
                            padding: "0.4rem",
                            borderRadius: "0.2rem",
                            backgroundColor: "white",
                            color: "black",
                            border: "0.0625rem solid",
                          }}
                        >
                          Recoil
                        </span>
                      </div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(179 159 103)" }}
                      >
                        구현 기능
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          Data Fetching
                        </li>
                        <p style={{ marginBottom: "1rem" }}>
                          React Query를 이용하여 Crypto Price API 데이터
                          fetching
                        </p>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          Styled Components
                        </li>
                        <p style={{ marginBottom: "1rem" }}>
                          Styled Components를 이용한 디자인 시스템 확장
                        </p>
                        <li style={{ marginBottom: "-0.3rem" }}>Dark Mode</li>
                        <p style={{ marginBottom: "1rem" }}>다크모드 구현</p>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          Data Visualization
                        </li>
                        <p style={{ marginBottom: "1rem" }}>
                          Apex Charts를 활용하여 암호화폐 시세 변화 데이터
                          시각화 구현
                        </p>
                      </div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(179 159 103)" }}
                      >
                        사용한 패키지
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          React Router
                        </li>
                        <li style={{ marginBottom: "-0.3rem" }}>React Query</li>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          Styled Components
                        </li>
                        <li style={{ marginBottom: "-0.3rem" }}>Typescript</li>
                        <li style={{ marginBottom: "-0.3rem" }}>Apex Charts</li>
                      </div>
                    </Context>
                  </IntroSection>
                  <PjItrTitle style={{ color: "#8d823c" }}>
                    구현영상 & 상세기능 설명
                  </PjItrTitle>
                  <IntroSection>
                    {/* 1 */}
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(179 159 103)" }}
                      >
                        HOME
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [상세기능 설명]
                        <li>실시간 인기 코인을 한눈에 볼 수 있습니다.</li>
                      </div>
                    </Context>
                    <Video
                      controls
                      src="thorn-coin-home.mp4"
                      poster="thc-home-poster.jpg"
                    ></Video>
                    {/* 2 */}
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(179 159 103)" }}
                      >
                        Coin 상세 페이지
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [상세기능 설명]
                        <li>
                          각각의 코인에 대한 상세 정보를 보여주는 페이지 입니다.
                        </li>
                        <li>
                          실시간 코인 시세변화, 차트정보를 제공하고 있습니다.
                        </li>
                        <li>
                          중첩 라우팅을 통해 가격정보와 차트정보 탭을
                          구현하였습니다.
                        </li>
                      </div>
                    </Context>
                    <Context>
                      <div>
                        <li
                          style={{
                            listStyleType: "number",
                            textIndent: "1.2rem",
                            marginTop: "2rem",
                          }}
                        >
                          가격 정보
                        </li>
                        <p>달러 가격과 24시간 거래량, 시가총액, 변동사항 등</p>
                        <p>다양한 정보가 표시됩니다.</p>
                        <Video
                          controls
                          src="thorn-coin-price.mp4"
                          poster="thc-price-poster.jpg"
                        ></Video>
                        <li
                          style={{
                            listStyleType: "number",
                            textIndent: "1.2rem",
                            marginTop: "2rem",
                          }}
                        >
                          차트 정보
                        </li>
                        <p>3주간의 가격변화를 나타내는 차트가 표시됩니다.</p>
                        <Video
                          controls
                          src="thorn-coin-chart.mp4"
                          poster="thc-chart-poster.jpg"
                        ></Video>
                      </div>
                    </Context>
                    {/* 다크모드 */}
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(179 159 103)" }}
                      >
                        DARK & LIGHT MODE
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [상세기능 설명]
                        <li>
                          사용자의 편의성을 높이기 위해 DARK, LIGHT 모드를
                          구현하였습니다.
                        </li>
                        <p>홈페이지 상단 헤더에서 테마변경 버튼을 클릭하여</p>
                        <p>쉽게 테마를 변경할 수 있도록 하였습니다.</p>
                        <Video
                          controls
                          src="thorn-coin-theme.mp4"
                          poster="thc-theme-poster.jpg"
                        ></Video>
                      </div>
                    </Context>
                  </IntroSection>
                </TextBox>
              </TextContainer>
            </Popup>
          </PopupContainer>
        ) : null}
        {/* THORN TO DO */}
        {showTtdPopup ? (
          <PopupContainer>
            <ThcHeader>
              <ThcTitle>
                <Title>THORN TO DO</Title>
                <CloseButton onClick={onTtdClosePopup}>X</CloseButton>
              </ThcTitle>
            </ThcHeader>
            <Popup>
              <TextContainer>
                <TextBox>
                  <PjTitle
                    style={{
                      boxShadow: "rgb(1 242 17 / 25%) 0px -15px 0px inset",
                    }}
                  >
                    THORN TO DO
                  </PjTitle>
                  <div
                    style={{
                      height: "3rem",
                      width: "10rem",
                      marginTop: "1rem",
                      alignItems: " center",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    {/* 깃허브 바로가기 */}
                    <a
                      style={{
                        width: "3.2rem",
                        height: "3rem",
                        marginRight: "2rem",
                      }}
                      href="https://github.com/xowoony/thorn-to-do/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ width: "3.2rem", height: "3rem" }}
                        src="github.jpg"
                        alt=""
                      />
                    </a>
                    {/* THORN TO DO 홈페이지 바로가기 */}
                    <a
                      style={{ width: "2.5rem", height: "2.5rem" }}
                      href="https://xowoony.github.io/thorn-to-do/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ width: "2.5rem", height: "2.5rem" }}
                        src="ttd.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <EtbImage src="ttd-home.jpg" alt="" />
                  <PjItrTitle style={{ color: "rgb(68 155 59)" }}>
                    프로젝트 소개
                  </PjItrTitle>
                  <IntroSection>
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(68 155 59)" }}
                      >
                        프로젝트명
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>THORN TO DO</div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(68 155 59)" }}
                      >
                        개발 인원
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>1인 (개인 프로젝트)</div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(68 155 59)" }}
                      >
                        프로젝트 설명
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        간단하게 TO DO LIST를 작성할 수 있는 사이트입니다.
                        <br />
                        TODO, DOING, DONE 총 세 카테고리가 있으며
                        <br />
                        각각의 카테고리에서 메모를 추가할 수 있습니다.
                        <br />
                        생성된 메모는 버튼을 클릭하여 상태를 변경하여
                        <br />
                        카테고리를 옮기거나 삭제할 수 있습니다.
                        <br />
                        THORN TO DO는 모바일 반응형으로 제작되었습니다.
                      </div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(68 155 59)" }}
                      >
                        사용 기술 스택
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div
                        style={{
                          fontFamily: "'Do Hyeon'",
                          fontSize: "0.9rem",
                          color: "black",
                          marginTop: "1rem",
                        }}
                      >
                        <span
                          style={{
                            marginRight: "1.2rem",
                            boxShadow: "none",
                            padding: "0.4rem",
                            borderRadius: "0.2rem",
                            backgroundColor: "white",
                            color: "#034cab",
                            border: "0.0625rem solid",
                          }}
                        >
                          Typescript
                        </span>
                        <span
                          style={{
                            marginRight: "1.2rem",
                            boxShadow: "none",
                            padding: "0.4rem",
                            borderRadius: "0.2rem",
                            backgroundColor: "white",
                            color: "#01b2da",
                            border: "0.0625rem solid",
                          }}
                        >
                          React
                        </span>
                        <span
                          style={{
                            marginRight: "1.2rem",
                            boxShadow: "none",
                            padding: "0.4rem",
                            borderRadius: "0.2rem",
                            backgroundColor: "white",
                            color: "black",
                            border: "0.0625rem solid",
                          }}
                        >
                          Recoil
                        </span>
                      </div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(68 155 59)" }}
                      >
                        구현 기능
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          Form Validation
                        </li>
                        <p style={{ marginBottom: "1rem" }}>
                          React Hook Form을 이용하여 입력폼 빌드와 검증
                        </p>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          Recoil Persist
                        </li>
                        <p style={{ marginBottom: "1rem" }}>
                          Recoil Persist를 이용하여 localStorage에 데이터 저장
                        </p>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          State Management
                        </li>
                        <p style={{ marginBottom: "1rem" }}>
                          Recoil atoms와 selectors를 이용하여 어플리케이션
                          상태관리
                        </p>
                      </div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(68 155 59)" }}
                      >
                        사용한 패키지
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        <li style={{ marginBottom: "-0.3rem" }}>Typescript</li>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          Styled Components
                        </li>
                        <li style={{ marginBottom: "-0.3rem" }}>Recoil</li>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          Recoil Persist
                        </li>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          React Hook Form
                        </li>
                      </div>
                    </Context>
                  </IntroSection>
                  <PjItrTitle style={{ color: "rgb(68 155 59)" }}>
                    구현영상 & 상세기능 설명
                  </PjItrTitle>
                  <IntroSection>
                    {/* 1 */}
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(68 155 59)" }}
                      >
                        TODO
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [상세기능 설명]
                        <li style={{ marginBottom: "-0.2rem" }}>
                          TODO 카테고리에서는 DOING, DONE, DELETE 버튼이
                          활성화되며
                        </li>
                        <p>버튼을 클릭하여 상태를 변경할 수 있습니다.</p>
                      </div>
                    </Context>
                    <Video
                      controls
                      src="todo.mp4"
                      poster="ttd-todo-poster.jpg"
                    ></Video>
                    {/* 2 */}
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(68 155 59)" }}
                      >
                        DOING
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [상세기능 설명]
                        <li style={{ marginBottom: "-0.2rem" }}>
                          DOING 카테고리에서는 TODO, DONE, DELETE 버튼이
                          활성화되며
                        </li>
                        <p>버튼을 클릭하여 상태를 변경할 수 있습니다.</p>
                      </div>
                    </Context>
                    <Video
                      controls
                      src="doing.mp4"
                      poster="ttd-doing-poster.jpg"
                    ></Video>
                    {/* 3 */}
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid rgb(68 155 59)" }}
                      >
                        DONE
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [상세기능 설명]
                        <li style={{ marginBottom: "-0.2rem" }}>
                          DONE 카테고리에서는 TODO, DOING, DELETE 버튼이
                          활성화되며
                        </li>
                        <p>버튼을 클릭하여 상태를 변경할 수 있습니다.</p>
                        <Video
                          controls
                          src="done.mp4"
                          poster="ttd-done-poster.jpg"
                        ></Video>
                      </div>
                    </Context>
                  </IntroSection>
                </TextBox>
              </TextContainer>
            </Popup>
          </PopupContainer>
        ) : null}
        {/* 잔이비어 */}
        {showEtbPopup ? (
          <PopupContainer>
            <ThcHeader>
              <ThcTitle>
                <Title>잔이비어</Title>
                <CloseButton onClick={onEtbClosePopup}>X</CloseButton>
              </ThcTitle>
            </ThcHeader>
            <Popup>
              <TextContainer>
                <TextBox>
                  <PjTitle>잔이비어</PjTitle>
                  <div
                    style={{
                      height: "3rem",
                      width: "10rem",
                      marginTop: "1rem",
                      alignItems: " center",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    {/* 깃허브 바로가기 */}
                    <a
                      style={{
                        width: "3.2rem",
                        height: "3rem",
                        marginRight: "2rem",
                      }}
                      href="https://github.com/xowoony/etb-public"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ width: "3.2rem", height: "3rem" }}
                        src="github.jpg"
                        alt=""
                      />
                    </a>
                    {/* 잔이비어 홈페이지 바로가기 */}
                    <a
                      style={{ width: "2.5rem", height: "2.5rem" }}
                      href="https://etb.xowoony.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ width: "2.5rem", height: "2.5rem" }}
                        src="etb.jpg"
                        alt=""
                      />
                    </a>
                  </div>

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
                      <div>3인 (팀프로젝트)</div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle>프로젝트 설명</SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        맥주를 좋아하는 사람들끼리 서로 소통하고
                        <br />
                        맥주에 대한 정보를 쉽게 얻을 수 있으며,
                        <br />
                        사용자 자체적으로 모임을 추진할 수 있는 서비스입니다.
                        <br />
                        맥주 관련 정보와 사용자 후기를 간편하게 조회할 수
                        있으며,
                        <br />
                        인기 맥주 동향 파악과 더불어 사용자들 간의 모임 추진 등
                        <br />
                        다양한 커뮤니티 활동이 가능하도록 구현하여
                        <br />
                        오로지 맥주만을 위한 소통의 공간을 마련하였습니다.
                      </div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle>기여한 부분</SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        <span>프로젝트 팀장</span>
                        <br />
                        <span>프로젝트 아이디어 최초 제안</span>
                        <br />
                        <br />
                        <span>프론트엔드</span>
                        <li>화면설계 전반</li>
                        <li>전체 사이트 프론트 통일</li>
                        <br />
                        <br />
                        <span>백엔드</span>
                        <li>카카오 주소찾기 API를 활용한 회원가입 폼 구현</li>
                        <li>
                          로그인, 로그아웃, 이메일 찾기, 비밀번호 재설정 구현
                        </li>
                        <li>
                          마이페이지(닉네임변경, 연락처변경, 주소변경,
                          회원탈퇴)구현
                        </li>
                        <li>맥주 소개 페이지 구현</li>
                      </div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle
                        style={{ borderLeft: "6px solid  rgb(165 50 50)" }}
                      >
                        사용 기술 스택
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <EtbStack>
                        <div
                          style={{ marginBottom: "1rem", marginLeft: "3rem" }}
                        >
                          <span
                            style={{
                              marginRight: "1.2rem",
                              boxShadow: "none",
                              padding: "0.4rem",
                              borderRadius: "0.2rem",
                              backgroundColor: "white",
                              color: "red",
                              border: "0.0625rem solid",
                            }}
                          >
                            HTML
                          </span>
                          <span
                            style={{
                              marginRight: "1.2rem",
                              boxShadow: "none",
                              padding: "0.4rem",
                              borderRadius: "0.2rem",
                              backgroundColor: "white",
                              color: "#3876e3",
                              border: "0.0625rem solid",
                            }}
                          >
                            CSS
                          </span>
                          <span
                            style={{
                              marginRight: "1.2rem",
                              boxShadow: "none",
                              padding: "0.4rem",
                              borderRadius: "0.2rem",
                              backgroundColor: "white",
                              color: "#e3b800",
                              border: "0.0625rem solid",
                            }}
                          >
                            Javascript
                          </span>
                        </div>

                        <div style={{ marginLeft: "3rem" }}>
                          <span
                            style={{
                              marginRight: "1.2rem",
                              boxShadow: "none",
                              padding: "0.4rem",
                              borderRadius: "0.2rem",
                              backgroundColor: "white",
                              color: "#2f5d7f",
                              border: "0.0625rem solid",
                            }}
                          >
                            java
                          </span>
                          <span
                            style={{
                              marginRight: "1.2rem",
                              boxShadow: "none",
                              padding: "0.4rem",
                              borderRadius: "0.2rem",
                              backgroundColor: "white",
                              color: "#032742",
                              border: "0.0625rem solid",
                            }}
                          >
                            MariaDB
                          </span>
                          <span
                            style={{
                              marginRight: "1.2rem",
                              boxShadow: "none",
                              padding: "0.4rem",
                              borderRadius: "0.2rem",
                              backgroundColor: "white",
                              color: "#1cb611",
                              border: "0.0625rem solid",
                            }}
                          >
                            Spring Boot
                          </span>
                        </div>
                      </EtbStack>
                    </Context>
                  </IntroSection>
                  <PjItrTitle>구현영상 & 상세기여 설명</PjItrTitle>
                  <IntroSection>
                    {/* 1 */}
                    <SubTitleContainer>
                      <SubTitle>HOME</SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [기여한 부분]
                        <li>index.html 페이지 프론트엔드 전반 사항</li>
                      </div>
                    </Context>
                    <Video
                      controls
                      src="etb-home.mp4"
                      poster="etb-home-poster.jpg"
                    ></Video>
                    {/* 2 */}
                    <SubTitleContainer>
                      <SubTitle>시작하기 ▶ 회원가입</SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [기여한 부분]
                        <li>회원가입 부분 백엔드, 프론트엔드 전반 사항</li>
                        <p>
                          사용자로부터 회원가입에 필요한 항목들을 입력받은 후,
                        </p>
                        <p>
                          이미 가입한 사용자의 정보와 일치 하는 정보가 없을 경우
                        </p>
                        <p>정상적으로 회원가입이 될 수 있게 구현하였습니다.</p>
                        <br />
                        <p>회원가입시 이메일 인증을 통해</p>
                        <p>
                          코드를 받고 입력하여 가입할 수 있게 구현하였습니다.
                        </p>
                        <p>
                          비밀번호는 해싱되어 DB에 저장될 수 있도록 하였습니다.
                        </p>
                      </div>
                    </Context>
                    <Context>
                      <div>
                        <li
                          style={{
                            listStyleType: "number",
                            textIndent: "1.2rem",
                            marginTop: "2rem",
                          }}
                        >
                          회원가입의 시작
                        </li>
                        <Video
                          controls
                          src="register1.mp4"
                          poster="etb-register1-poster.jpg"
                        ></Video>
                        <li
                          style={{
                            listStyleType: "number",
                            textIndent: "1.2rem",
                            marginTop: "2rem",
                          }}
                        >
                          회원가입 요청 후 메일로 인증번호 전송
                        </li>
                        <RegisterImg src="register2.jpg"></RegisterImg>
                        <li
                          style={{
                            listStyleType: "number",
                            textIndent: "1.2rem",
                            marginTop: "2rem",
                          }}
                        >
                          회원가입 완료
                        </li>
                        <Video
                          controls
                          src="register3.mp4"
                          poster="etb-register3-poster.jpg"
                        ></Video>
                      </div>
                    </Context>
                    {/* 3 */}
                    <SubTitleContainer>
                      <SubTitle>시작하기 ▶ 로그인</SubTitle>
                      <a
                        href="https://xowoony.tistory.com/424"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span
                          style={{
                            marginLeft: "2rem",
                            fontSize: "0.7rem",
                            boxShadow:
                              "rgb(220 100 137 / 25%) 0px -10px 0px inset",
                          }}
                        >
                          블로그 기록
                        </span>
                      </a>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [기여한 부분]
                        <li>로그인 부분 백엔드, 프론트엔드 전반 사항</li>
                        <p>사용자가 입력한 이메일과 비밀번호가</p>
                        <p>회원가입한 유저의 이메일과 비밀번호와 일치할 경우</p>
                        <p>로그인이 되도록 구현하였습니다.</p>
                        <br />
                        <p>그 외의 이메일을 입력했거나</p>
                        <p>비밀번호가 틀렸을 경우 로그인이 되지 않으며,</p>
                        <p>로그인에 실패하였으니 다시 시도하라는</p>
                        <p>경고 메시지를 띄우도록 조치하였습니다.</p>
                      </div>
                    </Context>
                    {/* 4 */}
                    <SubTitleContainer>
                      <SubTitle>시작하기 ▶ 로그아웃</SubTitle>
                      <a
                        href="https://xowoony.tistory.com/425"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span
                          style={{
                            marginLeft: "2rem",
                            fontSize: "0.7rem",
                            boxShadow:
                              "rgb(220 100 137 / 25%) 0px -10px 0px inset",
                          }}
                        >
                          블로그 기록
                        </span>
                      </a>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [기여한 부분]
                        <li>로그아웃 부분 백엔드, 프론트엔드 전반 사항</li>
                        <p>
                          로그아웃 버튼을 눌렀을 때 정상적으로 로그아웃이 되며,
                        </p>
                        <p>
                          로그아웃 후 바로 로그인 페이지로 가도록
                          구현하였습니다.
                        </p>
                        <Video
                          controls
                          src="logout.mp4"
                          poster="etb-logout-poster.jpg"
                        ></Video>
                      </div>
                    </Context>
                    {/* 5 닉네임 변경 */}
                    <SubTitleContainer>
                      <SubTitle>시작하기 ▶ 마이페이지 ▶ 닉네임 변경</SubTitle>
                      <a
                        href="https://xowoony.tistory.com/422"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span
                          style={{
                            marginLeft: "2rem",
                            fontSize: "0.7rem",
                            boxShadow:
                              "rgb(220 100 137 / 25%) 0px -10px 0px inset",
                          }}
                        >
                          블로그 기록
                        </span>
                      </a>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [기여한 부분]
                        <li>닉네임 변경 부분 백엔드, 프론트엔드 전반 사항</li>
                        <Video
                          controls
                          src="nick-change.mp4"
                          poster="etb-nick-change-poster.jpg"
                        ></Video>
                      </div>
                    </Context>
                    {/* 6 연락처 변경 */}
                    <SubTitleContainer>
                      <SubTitle>시작하기 ▶ 마이페이지 ▶ 연락처 변경</SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [기여한 부분]
                        <li>연락처 변경 부분 백엔드, 프론트엔드 전반 사항</li>
                        <Video
                          controls
                          src="contact-change.mp4"
                          poster="etb-contact-change-poster.jpg"
                        ></Video>
                      </div>
                    </Context>
                    {/* 7 주소 변경 */}
                    <SubTitleContainer>
                      <SubTitle>시작하기 ▶ 마이페이지 ▶ 주소 변경</SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [기여한 부분]
                        <li>주소 변경 부분 백엔드, 프론트엔드 전반 사항</li>
                        <Video
                          controls
                          src="address-change.mp4"
                          poster="etb-address-change-poster.jpg"
                        ></Video>
                      </div>
                    </Context>
                    {/* 8 닉네임 변경 */}
                    <SubTitleContainer>
                      <SubTitle>시작하기 ▶ 마이페이지 ▶ 회원 탈퇴</SubTitle>
                      <a
                        href="https://xowoony.tistory.com/419"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span
                          style={{
                            marginLeft: "2rem",
                            fontSize: "0.7rem",
                            boxShadow:
                              "rgb(220 100 137 / 25%) 0px -10px 0px inset",
                          }}
                        >
                          블로그 기록
                        </span>
                      </a>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [기여한 부분]
                        <li>회원탈퇴 부분 백엔드, 프론트엔드 전반 사항</li>
                        <p>유저로부터 이메일과 패스워드를 입력하게 한 뒤</p>
                        <p>그것이 실제로 DB에 있는 유저의 이메일, 패스워드와</p>
                        <p>일치하는지를 체크한 후 일치했을 경우</p>
                        <p>탈퇴가 정상적으로 진행되도록 구현하였습니다.</p>
                        <Video
                          controls
                          src="delete-user.mp4"
                          poster="etb-delete-user-poster.jpg"
                        ></Video>
                      </div>
                    </Context>
                    {/* 9 BEER*/}
                    <SubTitleContainer>
                      <SubTitle>PRODUCT ▶ BEER</SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [기여한 부분]
                        <li>백엔드</li>
                        <p>국내맥주, 해외맥주를</p>
                        <p>카테고리별로 정렬하여 볼 수 있게 구현 하였으며,</p>
                        <p style={{ marginBottom: "1rem" }}>
                          페이징을 구현하였습니다
                        </p>
                        <li>프론트엔드</li>
                        <p>BEER 페이지 전반 사항</p>
                        <p>(맥주 클릭시 상세정보를 볼 수 있는 부분 제외)</p>
                        <Video
                          controls
                          src="beer.mp4"
                          poster="etb-beer-poster.jpg"
                        ></Video>
                      </div>
                    </Context>
                    {/* 10 REVIEW*/}
                    <SubTitleContainer>
                      <SubTitle>PRODUCT ▶ REVIEW</SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [기여한 부분]
                        <li>없음</li>
                        <Video
                          controls
                          src="review.mp4"
                          poster="etb-review-poster.jpg"
                        ></Video>
                      </div>
                    </Context>
                    {/* 11 FESTIVAL*/}
                    <SubTitleContainer>
                      <SubTitle>FESTIVAL</SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [기여한 부분]
                        <li>FESTIVAL 페이지 프론트엔드 전반 사항</li>
                        <p>FESTIVAL 대문 페이지에 들어갔을 때</p>
                        <p>
                          국내 맥주 페스티벌 정보를 한눈에 볼 수 있게 GRID
                          형식으로
                        </p>
                        <p>
                          포스터를 정렬하여 사용자 접근성과 편의성을 높였습니다.
                        </p>
                        <Video
                          controls
                          src="festival.mp4"
                          poster="etb-festival-poster.jpg"
                        ></Video>
                      </div>
                    </Context>
                  </IntroSection>
                </TextBox>
              </TextContainer>
            </Popup>
          </PopupContainer>
        ) : null}
        {/* Trello */}
        {showTrlPopup ? (
          <PopupContainer>
            <ThcHeader>
              <ThcTitle>
                <Title>Trello</Title>
                <CloseButton onClick={onTrlClosePopup}>X</CloseButton>
              </ThcTitle>
            </ThcHeader>
            <Popup>
              <TextContainer>
                <TextBox>
                  <PjTitle
                    style={{
                      boxShadow: "rgb(175 156 206 / 56%) 0px -15px 0px inset",
                    }}
                  >
                    Trello
                  </PjTitle>
                  <div
                    style={{
                      height: "3rem",
                      width: "10rem",
                      marginTop: "1rem",
                      alignItems: " center",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    {/* 깃허브 바로가기 */}
                    <a
                      style={{
                        width: "3.2rem",
                        height: "3rem",
                        marginRight: "2rem",
                      }}
                      href="https://github.com/xowoony/trello"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ width: "3.2rem", height: "3rem" }}
                        src="github.jpg"
                        alt=""
                      />
                    </a>
                    {/* Trello 홈페이지 바로가기 */}
                    <a
                      style={{ width: "2.5rem", height: "2.5rem" }}
                      href="https://xowoony.github.io/trello/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ width: "2.5rem", height: "2.5rem" }}
                        src="Trello.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <EtbImage src="trello-memo-poster.jpg" alt="" />
                  <PjItrTitle style={{ color: "#5c2aab" }}>
                    프로젝트 소개
                  </PjItrTitle>
                  <IntroSection>
                    <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #5c2aab" }}>
                        프로젝트명
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>Trello</div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #5c2aab" }}>
                        개발 인원
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>1인 (개인 프로젝트)</div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #5c2aab" }}>
                        프로젝트 설명
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        진행 예정, 진행 중, 완료
                        <br />
                        총 3가지 상태별로 메모를 할 수 있으며,
                        <br />
                        Drag and Drop을 이용하여
                        <br />
                        상태 변동이 있을 경우
                        <br />
                        메모 간 간편하게 이동하고 삭제할 수 있도록
                        <br />
                        구현하였습니다.
                      </div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #5c2aab" }}>
                        사용 기술 스택
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div
                        style={{
                          fontFamily: "'Do Hyeon'",
                          fontSize: "0.9rem",
                          color: "black",
                          marginTop: "1rem",
                        }}
                      >
                        <span
                          style={{
                            marginRight: "1.2rem",
                            boxShadow: "none",
                            padding: "0.4rem",
                            borderRadius: "0.2rem",
                            backgroundColor: "white",
                            color: "#034cab",
                            border: "0.0625rem solid",
                          }}
                        >
                          Typescript
                        </span>
                        <span
                          style={{
                            marginRight: "1.2rem",
                            boxShadow: "none",
                            padding: "0.4rem",
                            borderRadius: "0.2rem",
                            backgroundColor: "white",
                            color: "#01b2da",
                            border: "0.0625rem solid",
                          }}
                        >
                          React
                        </span>
                        <span
                          style={{
                            marginRight: "1.2rem",
                            boxShadow: "none",
                            padding: "0.4rem",
                            borderRadius: "0.2rem",
                            backgroundColor: "white",
                            color: "black",
                            border: "0.0625rem solid",
                          }}
                        >
                          Recoil
                        </span>
                      </div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #5c2aab" }}>
                        구현 기능
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          Form Validation
                        </li>
                        <p style={{ marginBottom: "1rem" }}>
                          React Hook Form을 이용하여 입력폼 빌드와 검증
                        </p>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          Drag and Drop
                        </li>
                        <p style={{ marginBottom: "1rem" }}>
                          Beautiful DnD를 활용하여 Drag and Drop 구현
                        </p>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          State Management
                        </li>
                        <p style={{ marginBottom: "1rem" }}>
                          Recoil atoms와 selectors를 이용하여 어플리케이션
                          상태관리
                        </p>
                        <li style={{ marginBottom: "-0.3rem" }}>Dark Mode</li>
                        <p style={{ marginBottom: "1rem" }}>다크모드 구현</p>
                      </div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #5c2aab" }}>
                        사용한 패키지
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        <li style={{ marginBottom: "-0.3rem" }}>Typescript</li>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          Styled Components
                        </li>
                        <li style={{ marginBottom: "-0.3rem" }}>Recoil</li>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          Beautiful DnD
                        </li>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          React Hook Form
                        </li>
                      </div>
                    </Context>
                  </IntroSection>
                  <PjItrTitle style={{ color: "#5c2aab" }}>
                    구현영상 & 상세기능 설명
                  </PjItrTitle>
                  <IntroSection>
                    {/* 1 */}
                    <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #5c2aab" }}>
                        메모하기
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [상세기능 설명]
                        <li>
                          진행 예정, 진행 중, 완료 상태별로 메모를 할 수
                          있습니다.
                        </li>
                        <Video
                          controls
                          src="trello-memo.mp4"
                          poster="trello-memo-poster.jpg"
                        ></Video>
                      </div>
                    </Context>
                    {/* 2 */}
                    <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #5c2aab" }}>
                        드래그 앤 드롭
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [상세기능 설명]
                        <li>메모 상태에 변동이 있을 경우</li>
                        <p>상태를 쉽게 변경할 수 있도록</p>
                        <p>드래그 앤 드롭을 구현하였습니다.</p>
                      </div>
                    </Context>
                    <Video
                      controls
                      src="draganddrop.mp4"
                      poster="trello-draganddrop-poster.jpg"
                    ></Video>
                    {/* 3 */}
                    <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #5c2aab" }}>
                        Dark & Light Mode
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [상세기능 설명]
                        <li>
                          사용자의 편의성을 높이기 위해 DARK, LIGHT 모드를
                          구현하였습니다.
                        </li>
                        <p>홈페이지 상단 헤더에서 테마변경 버튼을 클릭하여</p>
                        <p>쉽게 테마를 변경할 수 있도록 하였습니다.</p>
                      </div>
                    </Context>
                    <Video
                      controls
                      src="darkmode.mp4"
                      poster="darkmode-poster.jpg"
                    ></Video>
                  </IntroSection>
                </TextBox>
              </TextContainer>
            </Popup>
          </PopupContainer>
        ) : null}
        {/* xowoony */}
        {showXownPopup ? (
          <PopupContainer>
            <ThcHeader>
              <ThcTitle>
                <Title>xowoony</Title>
                <CloseButton onClick={onXownClosePopup}>X</CloseButton>
              </ThcTitle>
            </ThcHeader>
            <Popup>
              <TextContainer style={{ marginTop: "0" }}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "white",
                    color: "black",
                    paddingTop: "4rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "500",
                      padding: "1rem",
                      fontFamily: "'Anton', sans-serif",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        boxShadow: " rgb(80 234 219 / 25%) 0px -15px 0px inset",
                      }}
                    >
                      ABOUT XOWOONY
                    </div>
                  </div>
                  <XownAbout>
                    안녕하세요?
                    <br />
                    새로운 것에 대해 호기심이 많고 <br />
                    탐험하는 것을 즐기는 개발자 정소운 입니다. <br />
                    <br />
                    공부를 처음 시작할 때 특히 개발은
                    <br />
                    '탐험과 닮아있다' 라는 생각이 문득 들었던 적이 있습니다.
                    <br />
                    <br />
                    스스로 목표를 세우고, 시도하는 과정에서 다양한 문제들을
                    만나고, <br />
                    문제를 해결해 나가는 과정에서 한 단계 더 성장하는
                    <br />
                    <br />
                    탐험과 닮아있는 개발의 모든 과정이 정말 매력적이라
                    생각하였고,
                    <br />그 매력으로 지금도 계속 공부해 나가고 있습니다.
                  </XownAbout>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "black",
                    color: "white",
                    paddingTop: "4rem",
                    paddingBottom: "6rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "500",
                      padding: "1rem",
                      fontFamily: "'Anton', sans-serif",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div>SKILLS</div>
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      marginTop: "3rem",
                    }}
                  >
                    <SkillsIcon
                      style={{
                        color: "red",
                      }}
                    >
                      HTML
                    </SkillsIcon>
                    <SkillsIcon
                      style={{
                        color: "purple",
                      }}
                    >
                      CSS
                    </SkillsIcon>
                    <SkillsIcon
                      style={{
                        color: "rgb(227, 184, 0)",
                      }}
                    >
                      Javascript
                    </SkillsIcon>
                    <SkillsIcon
                      style={{
                        color: "rgb(3, 76, 171)",
                      }}
                    >
                      Typescript
                    </SkillsIcon>
                    <SkillsIcon
                      style={{
                        color: "rgb(1, 178, 218)",
                      }}
                    >
                      React
                    </SkillsIcon>
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      marginTop: "3rem",
                    }}
                  >
                    <SkillsIcon
                      style={{
                        color: "rgb(47, 93, 127)",
                      }}
                    >
                      java
                    </SkillsIcon>
                    <SkillsIcon
                      style={{
                        color: "rgb(3, 39, 66)",
                      }}
                    >
                      MariaDB
                    </SkillsIcon>
                    <SkillsIcon
                      style={{
                        color: "#1cb611",
                      }}
                    >
                      Spring Boot
                    </SkillsIcon>
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "white",
                    color: "black",
                    paddingTop: "4rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "500",
                      padding: "1rem",
                      fontFamily: "'Anton', sans-serif",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        boxShadow: " rgb(88 80 234 / 25%) 0px -15px 0px inset",
                      }}
                    >
                      EDUCATION
                    </div>
                  </div>
                  <EduContext style={{ marginBottom: "2rem" }}>
                    <div style={{ fontWeight: "600" }}>계명대학교</div>
                    <div>체육학 전공</div>
                    <div>2013. 03 ~ 2016. 08</div>
                  </EduContext>
                  <EduContext>
                    <div style={{ fontWeight: "600" }}>KOREA IT ACADEMY</div>
                    <div>임베디드 소프트웨어 융합 풀스택 개발자 양성과정</div>
                    <div>2022. 08 ~ 2023. 02</div>
                  </EduContext>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "black",
                      color: "white",
                      paddingTop: "4rem",
                      paddingBottom: "4rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: "500",
                        padding: "1rem",
                        fontFamily: "'Anton', sans-serif",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      CONTACT
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "13rem",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <ContactLeft>
                          <div
                            style={{
                              height: "6rem",
                              alignItems: "center",
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                            }}
                          >
                            <ContactIcon1>
                              <a
                                href="https://github.com/xowoony"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fa-brands fa-github skills-logo"></i>
                              </a>
                            </ContactIcon1>
                            <ContactIcon2>
                              <a
                                href="https://www.linkedin.com/in/xowoony0222/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fa-brands fa-linkedin skills-logo"></i>
                              </a>
                            </ContactIcon2>
                            <ContactIcon3>
                              <a
                                href="https://xowoony.tistory.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img src="tistory.jpg" alt="" />
                              </a>
                            </ContactIcon3>
                          </div>
                          <ContactText>
                            <div>
                              <div style={{ marginBottom: "0.5rem" }}>
                                email : xowoony@gmail.com
                              </div>
                              <div style={{ marginBottom: "0.5rem" }}>
                                github : xowoony
                              </div>
                              <div>blog : xowoony.tistory.com</div>
                            </div>
                          </ContactText>
                        </ContactLeft>
                      </div>
                      <a
                        href="http://qr.kakao.com/talk/Ub7kyo0rm0.qItr9GzCKcALZz3c-"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: "20rem",
                          height: "100%",
                          alignItems: "center",
                          display: "flex",
                          justifyContent: " center",
                          flexDirection: "column",
                          marginBottom: "2rem",
                        }}
                      >
                        <QrImg src="qr.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </TextContainer>
            </Popup>
          </PopupContainer>
        ) : null}
        {/* Netflix clone */}
        {showNfxPopup ? (
          <PopupContainer>
            <ThcHeader>
              <ThcTitle>
                <Title>Netflix Clone</Title>
                <CloseButton onClick={onNfxClosePopup}>X</CloseButton>
              </ThcTitle>
            </ThcHeader>
            <Popup>
              <TextContainer>
                <TextBox>
                  <PjTitle
                    style={{
                      boxShadow: "rgb(225, 129, 130 / 56%) 0px -15px 0px inset",
                    }}
                  >
                    Netflix Clone
                  </PjTitle>
                  <NfxNotice>
                    <div>현재 개발중인 프로젝트입니다!</div>
                    <div>그래도 살펴보시려면 아래 링크를 클릭해 주세요!</div>
                  </NfxNotice>

                  <div
                    style={{
                      height: "3rem",
                      width: "10rem",
                      marginTop: "1rem",
                      alignItems: " center",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    {/* 깃허브 바로가기 */}
                    <a
                      style={{
                        width: "3.2rem",
                        height: "3rem",
                        marginRight: "2rem",
                      }}
                      href="https://github.com/xowoony/netflix-clone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ width: "3.2rem", height: "3rem" }}
                        src="github.jpg"
                        alt=""
                      />
                    </a>
                    {/* Netflix-Clone 홈페이지 바로가기 */}
                    <a
                      style={{ width: "2.5rem", height: "2.5rem" }}
                      href="https://netflix-clone-xowoony.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ width: "2.5rem", height: "2.5rem" }}
                        src="netflix.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <EtbImage src="netflix-poster.jpg" alt="" />
                  <PjItrTitle style={{ color: "#e78989" }}>
                    프로젝트 소개
                  </PjItrTitle>
                  <IntroSection>
                    <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #e78989" }}>
                        프로젝트명
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>Netflix-Clone</div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #e78989" }}>
                        개발 인원
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>1인 (개인 프로젝트)</div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #e78989" }}>
                        프로젝트 설명
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>Netflix 사이트를 클론한 프로젝트입니다.</div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #e78989" }}>
                        사용 기술 스택
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div
                        style={{
                          fontFamily: "'Do Hyeon'",
                          fontSize: "0.9rem",
                          color: "black",
                          marginTop: "1rem",
                        }}
                      >
                        <span
                          style={{
                            marginRight: "1.2rem",
                            boxShadow: "none",
                            padding: "0.4rem",
                            borderRadius: "0.2rem",
                            backgroundColor: "white",
                            color: "#034cab",
                            border: "0.0625rem solid",
                          }}
                        >
                          Typescript
                        </span>
                        <span
                          style={{
                            marginRight: "1.2rem",
                            boxShadow: "none",
                            padding: "0.4rem",
                            borderRadius: "0.2rem",
                            backgroundColor: "white",
                            color: "#01b2da",
                            border: "0.0625rem solid",
                          }}
                        >
                          React
                        </span>
                        <span
                          style={{
                            marginRight: "1.2rem",
                            boxShadow: "none",
                            padding: "0.4rem",
                            borderRadius: "0.2rem",
                            backgroundColor: "white",
                            color: "black",
                            border: "0.0625rem solid",
                          }}
                        >
                          Recoil
                        </span>
                      </div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #e78989" }}>
                        구현 기능
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        <li style={{ marginBottom: "-0.3rem" }}>Animations</li>
                        <p style={{ marginBottom: "1rem" }}>
                          Framer Motion을 이용하여 애니메이션과 슬라이더를 구현
                        </p>
                        <li style={{ marginBottom: "-0.3rem" }}>Modals</li>
                        <p style={{ marginBottom: "1rem" }}>인터랙션 구현</p>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          Data Fetching
                        </li>
                        <p style={{ marginBottom: "1rem" }}>
                          React Query를 이용하여 movie API 데이터 fetching
                        </p>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          Styled Components
                        </li>
                        <p style={{ marginBottom: "1rem" }}>
                          Styled Components를 이용한 디자인 시스템 확장
                        </p>
                      </div>
                    </Context>
                    <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #e78989" }}>
                        사용한 패키지
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        <li style={{ marginBottom: "-0.3rem" }}>Typescript</li>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          Styled Components
                        </li>
                        <li style={{ marginBottom: "-0.3rem" }}>Recoil</li>
                        <li style={{ marginBottom: "-0.3rem" }}>React Query</li>
                        <li style={{ marginBottom: "-0.3rem" }}>
                          Framer Motion
                        </li>
                      </div>
                    </Context>
                  </IntroSection>
                  {/* <PjItrTitle style={{ color: "#e78989" }}>
                    구현영상 & 상세기능 설명
                  </PjItrTitle> */}
                  {/* <IntroSection> */}
                  {/* 1 */}
                  {/* <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #e78989" }}>
                        메모하기
                      </SubTitle>
                    </SubTitleContainer> */}
                  {/* <Context>
                      <div>
                        [상세기능 설명]
                        <li>
                          진행 예정, 진행 중, 완료 상태별로 메모를 할 수
                          있습니다.
                        </li>
                        <Video
                          controls
                          src="trello-memo.mp4"
                          poster="trello-memo-poster.jpg"
                        ></Video>
                      </div>
                    </Context> */}
                  {/* 2 */}
                  {/* <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #e78989" }}>
                        드래그 앤 드롭
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [상세기능 설명]
                        <li>메모 상태에 변동이 있을 경우</li>
                        <p>상태를 쉽게 변경할 수 있도록</p>
                        <p>드래그 앤 드롭을 구현하였습니다.</p>
                      </div>
                    </Context> */}
                  {/* <Video
                      controls
                      src="draganddrop.mp4"
                      poster="trello-draganddrop-poster.jpg"
                    ></Video> */}
                  {/* 3 */}
                  {/* <SubTitleContainer>
                      <SubTitle style={{ borderLeft: "6px solid #e78989" }}>
                        Dark & Light Mode
                      </SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [상세기능 설명]
                        <li>
                          사용자의 편의성을 높이기 위해 DARK, LIGHT 모드를
                          구현하였습니다.
                        </li>
                        <p>홈페이지 상단 헤더에서 테마변경 버튼을 클릭하여</p>
                        <p>쉽게 테마를 변경할 수 있도록 하였습니다.</p>
                      </div>
                    </Context>
                    <Video
                      controls
                      src="darkmode.mp4"
                      poster="darkmode-poster.jpg"
                    ></Video> */}
                  {/* </IntroSection> */}
                </TextBox>
              </TextContainer>
            </Popup>
          </PopupContainer>
        ) : null}
      </Main>
      <Footer>
        <div>
          <button>
            <img src="windows-logo.jpg" alt="" />
            <span>시작</span>
          </button>
        </div>
        <div
          style={{
            width: "5.5rem",
            height: "1.89rem",
            marginLeft: "auto",
            marginRight: "0.5rem",
            color: "black",
            fontSize: "0.78rem",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderWidth: "0.05rem",
            borderStyle: "solid",
            borderColor: "gray white white gray",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "monospace",
                fontWeight: "100",
                fontSize: "14px",
              }}
            >
              오후 2:22
            </div>
          </div>
        </div>
      </Footer>
    </Container>
  );
}

export default Home;
