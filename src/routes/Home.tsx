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
  width: 50%;
  height: 29rem;
  color: black;
`;

const ThcHeader = styled.header`
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
  background-color: rgb(233, 230, 227);
  margin-left: 3rem;
  border-left: 6px solid rgb(165 50 50);
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
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 400;
  width: 100%;
  font-size: 0.9rem;
  line-height: 25px;
  div {
    margin-left: 7rem;
  }
`;

const IntroSection = styled.div`
  padding: 2rem 0;
  background-color: #fafafa;
  margin-bottom: 5rem;
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
                        맥주를 좋아하는 사람들끼리 서로 소통하고
                        <br />
                        맥주에 대한 정보를 쉽게 얻을 수 있으며,
                        <br />
                        사용자 자체적으로 모임을 추진할 수 있는 서비스를
                        개발해보고 싶었습니다.
                        <br />
                        오로지 맥주만을 위한 소통의 공간을 마련하였습니다.
                        <br />
                        맥주 관련 정보와 사용자 후기를 간편하게 조회할 수
                        있으며,
                        <br />
                        인기 맥주 동향 파악과 더불어 사용자들 간의 모임 추진 등
                        <br />
                        다양한 커뮤니티 활동이 가능하도록 구현하였습니다.
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
                    <Video controls src="etb-home.mp4"></Video>
                    {/* 2 */}
                    <SubTitleContainer>
                      <SubTitle>시작하기 ▶ 회원가입</SubTitle>
                    </SubTitleContainer>
                    <Context>
                      <div>
                        [기여한 부분]
                        <li style={{marginBottom: "0.5rem"}}>회원가입 부분 백엔드, 프론트엔드 전반 사항</li>
                        <p style={{ textIndent: "1.2rem" }}>
                          사용자로부터 회원가입에 필요한 항목들을 입력한 후,
                        </p>
                        <p style={{ textIndent: "1.2rem" }}>
                          이미 가입한 사용자의 정보와 일치 하는 정보가 없을 경우
                        </p>
                        <p style={{ textIndent: "1.2rem" }}>
                          정상적으로 회원가입이 될 수 있게 구현하였습니다.
                        </p>
                        <p style={{ textIndent: "1.2rem" }}>
                          회원가입시 이메일 인증을 통해 코드를 받고 입력하여
                          가입할 수 있게 구현하였습니다.
                        </p>
                      </div>
                    </Context>
                    <Video controls src="etb-home.mp4"></Video>
                  </IntroSection>
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
