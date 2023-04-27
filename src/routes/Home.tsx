import styled from "styled-components";

const Container = styled.div`
  height: 100%;
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
  return (
    <Container>
      <div>1</div>
      <Footer>2</Footer>
    </Container>
  );
}

export default Home;
