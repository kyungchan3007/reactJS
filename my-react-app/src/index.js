import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
// 배경 테마 색 정하기 ThemeProvider
const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "green",
};

const lightTheme = {
  textColor: "green",
  backgroundColor: "whitesmoke",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
