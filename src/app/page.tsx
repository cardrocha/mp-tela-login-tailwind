'use client'
import Login from "./componets/Login";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
}
