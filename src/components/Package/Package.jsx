import Button from "../Button/Button";
import "./Package.css";

export default function Package({ type, price, name }) {
  return (
    <div className="package-item">
      <div className="package-type">- {type} -</div>
      <div className="package-info">
        <div className="package-price">{price.toLocaleString('de-DE')} ₽</div>
        <div className="package-name">{name}</div>
        <Button>Оставить заявку</Button>
      </div>
    </div>
  );
}
