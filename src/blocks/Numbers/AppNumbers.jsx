import NumberBox from "../../components/NumberBox/NumberBox";
import { numbers } from "../../data";
import './AppNumbers.css'

export default function AppNumbers() {
  return (
    <section className="numbers">
      <div className="numbers-title"><strong>Robo School</strong> – учреждение для&nbsp;формирования кадрового педагогического резерва в&nbsp;сфере робототехники и&nbsp;программирования</div>
      <div className="numbers-container">
        {numbers.map((number) => (
          <NumberBox key={number.title} {...number} />
        ))}
      </div>
    </section>
  );
}
