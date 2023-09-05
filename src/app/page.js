"use client";
import Main from "../components/Main";
import { DarkModeContextProvider } from "../context/DarkModeContext";

export default function Home() {
  return (
    <DarkModeContextProvider>
      <Main />
    </DarkModeContextProvider>
  );
}
