import { useState } from "react";
import "./Header.css";

const Modal = ({ opened, setOpened }) => (
  <div className={`header__links-mob ${opened ? "show" : "hide"}`}>
    <img
      onClick={() => setOpened(false)}
      className="close-menu"
      src="imgs/close.svg"
      alt="close menu"
    />
    <a href="" className="header__links_link">
      О школе
    </a>
    <a href="" className="header__links_link">
      Тренеры
    </a>
    <a href="" className="header__links_link">
      Стоимость
    </a>
  </div>
);

export default function AppHeader() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="header">
      <div className="header__logo">ROBO.SCHOOL</div>
      <div className="header__links">
        <a href="" className="header__links_link">
          О школе
        </a>
        <a href="" className="header__links_link">
          Тренеры
        </a>
        <a href="" className="header__links_link">
          Стоимость
        </a>
      </div>
      <a href="tel:+78000001122" className="header__tel">
        +7 800 000 11 22
      </a>
      <div className="mobile">
        <div className="menu-icons">
          <a href="tel:+78000001122" className="mobile-phone">
            <img src="imgs/phone.svg" alt="phone" />
          </a>
          <img
            onClick={() => setOpened(true)}
            src="imgs/burger-menu.svg"
            alt="menu"
            className="menu-btn"
          />
        </div>
        <Modal opened={opened} setOpened={setOpened} />
      </div>
    </div>
  );
}
