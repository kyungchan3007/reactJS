import styled, { keyframes } from "styled-components";

export const H_1 = styled.h1`
  color: "yellow";
  &:hover {
    color: ${(props) => (props.isTrue ? "green" : "blue")};
  }
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

export const Warpper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  /* 배경색을 굳이 언급하지 않아도 index에서 정한 색갈을 읽기만 해주면된다.*/
  background-color: ${(props) => props.theme.backgroundColor};

  /* ${H_1} {
    :hover {
      font-size: ${(props) => (props.isTrue ? "100px" : "50px")};
    }
  } */
`;

export const Emoji_1 = styled.span`
  font-size: 50px;
`;

export const CircleBox = keyframes`
  
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
    background-color: blue;
  }
  
  50% {
    transform: rotate(240deg);
    border-radius: 25px;
    background-color: yellow;
  }
  
  100%{
    transform: rotate(360deg);
    border-radius: 50px;
    background-color: green;
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
    color : orange;
  }


`;

export const Btn_1 = styled.button`
  color: tomato;
  animation: ${TextAnimation} 0.5s infinite;
`;

export const Text = styled.span`
  width: 100px;
  height: 100px;
  font-size: 30px;
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
