import styled, { keyframes } from "styled-components";

export const Warpper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  h1 {
    color: tomato;
    &:hover {
      color: ${(props) => (props.isTrue ? "yellow" : "teal")};
    }
  }
`;
export const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
`;
export const Emoji_1 = styled.span`
  font-size: 30px;
`;

export const CircleBox = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(240deg);
    border-radius: 25px;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 50px;
  }
`;

export const Inputs = styled.input.attrs({ required: true, maxLangth: 10 })`
  background-color: tomato;
`;

export const TextAnimation = keyframes`
  from {
    color : tomato;
  }
  to {
    color : blue;
  }
`;
export const Btn_1 = styled.button`
  color: tomato;
  animation: ${TextAnimation} 0.5s infinite;
`;

export const Text = styled.span`
  width: 100px;
  height: 100px;
  animation: ${TextAnimation} 0.5s infinite;
  color: ${(props) => (props.isTrue ? "orange" : "yellow")};
`;

export const Box_1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: tomato;
  animation: ${CircleBox} 1s linear infinite;
  ${Emoji_1} {
    :hover {
      font-size: 98px;
    }
  }
`;

export const Circle = styled(Box_1)`
  border-radius: 50px;
`;
