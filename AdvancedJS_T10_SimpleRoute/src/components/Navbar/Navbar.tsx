import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

export function NavBar() {
const checkActive = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? `${style.menu__item} ${style["menu__item-active"]}`
    : style.menu__item;

  return (
    <nav className={style.menu}>
      <NavLink className={checkActive} to="/" end>
        Главная
      </NavLink>

      <NavLink className={checkActive} to="/drift">
        Дрифт-такси
      </NavLink>

      <NavLink className={checkActive} to="/timeattack">
        Time Attack
      </NavLink>

      <NavLink className={checkActive} to="/forza">
        Forza Karting
      </NavLink>
    </nav>
  );
}