import styled from "styled-components";
import pic1 from "./assets/baetteok.jpeg";
import pic2 from "./assets/emergency.jpeg";
import plate from "./assets/plate.png";
import pic3 from "./assets/schoolfood.jpeg";
import pic4 from "./assets/sinjeon.jpeg";
import pic5 from "./assets/yeopgi.jpeg";

function App() {
  const quizList = [
    {
      src: pic1,
      answer: "배떡",
    },
    {
      src: pic2,
      answer: "응급실 떡볶이",
    },
    {
      src: pic3,
      answer: "스쿨 푸드",
    },
    {
      src: pic4,
      answer: "신전 떡볶이",
    },
    {
      src: pic5,
      answer: "엽기 떡볶이",
    },
  ];
  return (
    <>
      <Header>BTS, 봉준호, 손흥민, 떡볶이, let's go</Header>
      <Content>
        <ScoreBoard>0 점</ScoreBoard>
        <QuizContainer>
          <QuizImg src={quizList[0].src} />
          <OptionList>
            <Option>신전 떡볶이</Option>
            <Option>응급실 떡볶이</Option>
            <Option>스쿨 푸드</Option>
            <Option>엽기 떡볶이</Option>
            <Option>배떡</Option>
          </OptionList>
          <RestartBtn>다시, let's go</RestartBtn>
        </QuizContainer>
      </Content>
    </>
  );
}

export default App;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  font-size: 45px;
  color: wheat;
`;

const Content = styled.content``;

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QuizImg = styled.img`
  width: 350px;
  height: 350px;
  margin-top: 20px;
  border-radius: 25px;
  object-fit: cover;
`;

const OptionList = styled.ul`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Option = styled.li`
  font-size: 20px;
  padding: 5px 15px;
  border-radius: 15px;
  background-color: wheat;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #990000;
  }
`;

const RestartBtn = styled.button`
  font-size: 23px;
  width: 150px;
  height: 70px;
  margin: 4px 0;
  background-image: ${`url(${plate})`};
  border-style: none;
  border-radius: 40px;
  cursor: pointer;

  &:hover {
    font-size: 26px;
  }
`;

const ScoreBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 36px;
  color: wheat;
  background-color: #990000;
`;
