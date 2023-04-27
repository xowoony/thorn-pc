import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const Item = styled.div`
  border: 0.0625rem solid white;
  margin: 0.2rem 0.1rem;
  width: 4.5rem;
  height: 5rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;

const Thc = styled.img`
  width: 3.5rme;
  height: 3.5rem;
`;

const Text = styled.div`
  font-size: 0.8rem;
  font-weight: 100;
  margin-top: 0.5rem;
  font-family: 'Cormorant Garamond', serif;
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
      <Main>
        <Item>
          <Thc src="d.jpg" alt="" />
          <Text>Thorn Coin</Text>
        </Item>
      </Main>
      <Footer>2</Footer>
    </Container>
  );
}

export default Home;
