import "./AppResult.css";
import { results } from "../../data.js"
import ResultBox from "../../components/ResultBox/ResultBox.jsx";

export default function AppResult() {
  return (
    <section className="results">
      <div className="results-container">
        <div className="results-title">Что вы получите после курса</div>
        <div className="results-list">
            {results.map((result) => (
                <ResultBox key={result.title} {...result}/>
            ))}
        </div>
      </div>
    </section>
  );
}
