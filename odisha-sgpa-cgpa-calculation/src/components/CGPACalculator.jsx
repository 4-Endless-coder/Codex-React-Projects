import { useState } from "react";
import { Plus, Trash2, TrendingUp } from "lucide-react";
import "../styles.css";
import { calculateCGPA, convertSGPAToPercentage } from "../lib/calculator"; // Import the logic

const CGPACalculator = () => {
  const [semesters, setSemesters] = useState([
    { id: "1", name: "Semester 1", sgpa: "", credits: "" },
    { id: "2", name: "Semester 2", sgpa: "", credits: "" },
  ]);
  const [result, setResult] = useState(null);

  const addSemester = () => {
    setSemesters([
      ...semesters,
      {
        id: Date.now().toString(),
        name: `Semester ${semesters.length + 1}`,
        sgpa: "",
        credits: "",
      },
    ]);
  };

  const removeSemester = (id) => {
    if (semesters.length > 1) {
      setSemesters(semesters.filter((s) => s.id !== id));
    }
  };

  const updateSemester = (id, field, value) => {
    setSemesters(semesters.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  const handleCalculate = () => {
    const calcResult = calculateCGPA(semesters);
    setResult(calcResult);
  };

  return (
    <div className="card calculator-card">
      <div className="card-header">
        <h3 className="card-title">
          <TrendingUp className="icon-inline" />
          Calculate CGPA
        </h3>
        <p className="card-description">Enter SGPA for each semester to calculate cumulative CGPA</p>
      </div>
      <div className="card-content">
        <div className="subjects-list">
          {semesters.map((semester) => (
            <div key={semester.id} className="subject-row">
              <div className="subject-field semester-name-field">
                <label htmlFor={`semester-name-${semester.id}`} className="label">
                  Semester Name
                </label>
                <input
                  id={`semester-name-${semester.id}`}
                  className="input"
                  placeholder="e.g., Semester 1"
                  value={semester.name}
                  onChange={(e) => updateSemester(semester.id, "name", e.target.value)}
                />
              </div>
              <div className="subject-field semester-sgpa-field">
                <label htmlFor={`sgpa-${semester.id}`} className="label">
                  SGPA (0-10)
                </label>
                <input
                  id={`sgpa-${semester.id}`}
                  type="number"
                  step="0.01"
                  className="input"
                  placeholder="7.34"
                  value={semester.sgpa}
                  onChange={(e) => updateSemester(semester.id, "sgpa", e.target.value)}
                />
              </div>
              <div className="subject-field semester-credit-field">
                <label htmlFor={`credits-${semester.id}`} className="label">
                  Total Credits
                </label>
                <input
                  id={`credits-${semester.id}`}
                  type="number"
                  className="input"
                  placeholder="29"
                  value={semester.credits}
                  onChange={(e) => updateSemester(semester.id, "credits", e.target.value)}
                />
              </div>
              <div className="subject-actions">
                <button
                  className="btn-icon btn-delete"
                  onClick={() => removeSemester(semester.id)}
                  disabled={semesters.length === 1}
                >
                  <Trash2 className="icon-small" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="action-buttons">
          <button onClick={addSemester} className="btn btn-secondary">
            <Plus className="icon-small" />
            Add Semester
          </button>
          <button onClick={handleCalculate} className="btn btn-primary"> {/* Updated this line */}
            <TrendingUp className="icon-small" />
            Calculate CGPA
          </button>
        </div>

        {result && (
          <div className="result-card">
            <div className="result-grid cgpa-result-grid">
              <div className="result-item">
                <p className="result-label">Total Credits</p>
                <p className="result-value result-main">{result.totalCredits}</p>
              </div>
              <div className="result-item">
                <p className="result-label">Cumulative CGPA</p>
                <p className="result-value result-main result-large">{result.cgpa}</p>
              </div>
            </div>
            <div className="result-footer">
              <p className="result-percentage">
                Approximate Overall Percentage: <strong>{convertSGPAToPercentage(result.cgpa)}%</strong> {/* Updated this line */}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CGPACalculator;