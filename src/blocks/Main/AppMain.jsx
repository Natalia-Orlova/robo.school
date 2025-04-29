import Button from "../../components/Button/Button";
import "./AppMain.css";

export default function AppMain() {
  return (
    <section className="main">
      <div className="main-container">
        <div className="main-left">
          <h1 className="main-left__title">Robo school</h1>
          <p className="main-left__descr">
            Курсы повышения квалификации по&nbsp;робототехнике для&nbsp;педагогов
            начальной школы
          </p>
          <Button className="sign-up">Записаться на курс</Button>
        </div>
        <img src="/imgs/main.png" alt="main image" className="main__img" />
      </div>
    </section>
  );
}
