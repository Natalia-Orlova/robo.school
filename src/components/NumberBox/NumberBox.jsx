import './NumberBox.css'

export default function NumberBox({ title, description }) {
  return (
    <div className="numbers-item">
      <div className="number">{title}</div>
      <p className="number-descr">{description}</p>
    </div>
  );
}
