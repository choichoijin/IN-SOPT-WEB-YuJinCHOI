import { useState } from "react";
import styled from "styled-components";
import plate from "./assets/plate.png";
import { optionTextList, quizList } from "./quizInfo";

quizList.sort(() => Math.random() - 0.5);
optionTextList.sort(() => Math.random() - 0.5);

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const checkAnswer = (answer) => {
    if (answer === quizList[currentStep].answer) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("오답입니다!");
    }
  };

  return (
    <>
      <Header>BTS, 봉준호, 손흥민, 떡볶이, let's go</Header>
      <Content>
        <ScoreBoard>{currentStep} 점</ScoreBoard>
        <QuizContainer>
          <QuizImg src={quizList[currentStep].src} />
          <OptionList>
            {optionTextList.map((optionText) => {
              return (
                <Option onClick={() => checkAnswer(optionText)}>
                  {optionText}
                </Option>
              );
            })}
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

const Content = styled.div``;

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
