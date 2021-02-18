import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>{" "}
      | <NavLink to="sobre">Sobre</NavLink> |
      <NavLink to="login">Login</NavLink>
      <h1>Sou o Header</h1>
    </nav>
  );
}
