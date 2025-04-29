import "./ResultBox.css";

export default function ResultBox({ title, description, label }) {
  return (
    <div className="result-item">
      <div className="result-item__title">
        {title}
        {label && (
          <div className="tooltip">
            <img src="/imgs/label.png" alt="info" />
            <span className="tooltiptext">{label}</span>
          </div>
        )}
      </div>
      <p className="result-item__descr">{description}</p>
    </div>
  );
}
