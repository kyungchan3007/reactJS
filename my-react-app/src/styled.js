import styled, { keyframes } from "styled-components";

export const BoxAnimation = keyframes`
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
export const Father = styled.div`
  display: flex;
`;
export const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
export const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;
export const Text = styled.span`
  width: 100px;
  height: 100px;
  color: ${(props) => (props.isTrue ? "red" : "blue")};
`;

export const Circle = styled(BoxTwo)`
  border-radius: 50px;
`;

export const Btn = styled.button`
  background-color: tomato;
  border-radius: 15px;
  border: 0;
  color: white;
`;

export const Inputs = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

export const Warpper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  background-color: tomato;
  animation: ${BoxAnimation} 1s linear infinite;
  span {
    font-size: 40px;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
