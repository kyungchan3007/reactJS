import * as S from "./styled";
import { useState } from "react";

export default function App() {
  const [isTrue, setIsTrue] = useState(false);
  const handleClick = () => {
    setIsTrue((prev) => !prev);
  };
  return (
    <S.Warpper>
      {/* <S.Box_1>
        <S.Emoji_1>😘</S.Emoji_1>
      </S.Box_1>

      <S.Btn_1>go home</S.Btn_1> */}
      <S.Text isTrue={isTrue} onClick={handleClick}>
        Hello
      </S.Text>
    </S.Warpper>
  );
}
