import { useState } from "react";
import { Plus, Trash2, Calculator } from "lucide-react";
import "../styles.css";
import { calculateSGPA } from "../lib/calculator"; // Import the logic

// gradePoints constant is now removed from here

const SGPACalculator = () => {
  const [subjects, setSubjects] = useState([
    { id: "1", name: "", credit: "", grade: "" },
  ]);
  const [result, setResult] = useState(null);

  const addSubject = () => {
    setSubjects([...subjects, { id: Date.now().toString(), name: "", credit: "", grade: "" }]);
  };

  const removeSubject = (id) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter((s) => s.id !== id));
    }
  };

  const updateSubject = (id, field, value) => {
    setSubjects(subjects.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  // Renamed to handleCalculate, it now only calls the logic
  const handleCalculate = () => {
    const calcResult = calculateSGPA(subjects);
    setResult(calcResult);
  };

  return (
    <div className="card calculator-card">
      <div className="card-header">
        <h3 className="card-title">
          <Calculator className="icon-inline" />
          Calculate SGPA
        </h3>
        <p className="card-description">Enter your subjects, credits, and grades to calculate your SGPA</p>
      </div>
      <div className="card-content">
        <div className="subjects-list">
          {subjects.map((subject) => (
            <div key={subject.id} className="subject-row">
              <div className="subject-field subject-name-field">
                <label htmlFor={`subject-${subject.id}`} className="label">
                  Subject Name
                </label>
                <input
                  id={`subject-${subject.id}`}
                  className="input"
                  placeholder="e.g., History of India"
                  value={subject.name}
                  onChange={(e) => updateSubject(subject.id, "name", e.target.value)}
                />
              </div>
              <div className="subject-field subject-credit-field">
                <label htmlFor={`credit-${subject.id}`} className="label">
                  Credits
                </label>
                <input
                  id={`credit-${subject.id}`}
                  type="number"
                  className="input"
                  placeholder="6"
                  value={subject.credit}
                  onChange={(e) => updateSubject(subject.id, "credit", e.target.value)}
                />
              </div>
              <div className="subject-field subject-grade-field">
                <label htmlFor={`grade-${subject.id}`} className="label">
                  Grade
                </label>
                <select
                  id={`grade-${subject.id}`}
                  className="select"
                  value={subject.grade}
                  onChange={(e) => updateSubject(subject.id, "grade", e.target.value)}
                >
                  <option value="">Select grade</option>
                  <option value="O">O (90-100)</option>
                  <option value="A+">A+ (80-89)</option>
                  <option value="A">A (70-79)</option>
                  <option value="B+">B+ (60-69)</option>
                  <option value="B">B (50-59)</option>
                  <option value="C">C (45-49)</option>
                  <option value="D">D (40-44)</option>
                  <option value="F">F (Below 40)</option>
                </select>
              </div>
              <div className="subject-actions">
                <button
                  className="btn-icon btn-delete"
                  onClick={() => removeSubject(subject.id)}
                  disabled={subjects.length === 1}
                >
                  <Trash2 className="icon-small" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="action-buttons">
          <button onClick={addSubject} className="btn btn-secondary">
            <Plus className="icon-small" />
            Add Subject
          </button>
          <button onClick={handleCalculate} className="btn btn-primary"> {/* Updated this line */}
            <Calculator className="icon-small" />
            Calculate SGPA
          </button>
        </div>

        {result && (
          <div className="result-card">
            <div className="result-grid">
              <div className="result-item">
                <p className="result-label">Total Credits</p>
                <p className="result-value">{result.totalCredits}</p>
              </div>
              <div className="result-item">
                <p className="result-label">Total Credit Points</p>
                <p className="result-value">{result.totalCP}</p>
              </div>
              <div className="result-item">
                <p className="result-label">SGPA</p>
                <p className="result-value result-main">{result.sgpa}</p>
              </div>
            </div>
            <div className="result-footer">
              {/* Using the imported function here as well for consistency */}
              <p className="result-percentage">
                Approximate Percentage: <strong>{convertSGPAToPercentage(result.sgpa)}%</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SGPACalculator;