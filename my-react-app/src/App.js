import * as S from "./styled";
import { useState } from "react";

export default function App() {
  const [isTrue, setIsTrue] = useState(false);
  const handleClick = () => {
    setIsTrue((prev) => !prev);
  };
  return (
    <S.Warpper>
      <S.Box>
        <span>😘</span>
      </S.Box>
    </S.Warpper>
  );
}
