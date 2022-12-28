import * as S from "./styled";
import { useState } from "react";

export default function App() {
  const [isTrue, setIsTrue] = useState(false);
  const handleClick = () => {
    setIsTrue((prev) => !prev);
  };
  console.log(isTrue);
  return (
    <S.Warpper>
      <S.Title isTrue={isTrue}> HelloWorld </S.Title>
    </S.Warpper>
  );
}
