import { useState } from "react";
import { ArrowRightLeft, Percent, Calculator } from "lucide-react";
import "../styles.css";
// Import all the new functions
import { 
  convertSGPAToPercentage, 
  convertMarksToGrade, 
  convertSGPAToTotalMarks 
} from "../lib/calculator";

const PercentageConverter = () => {
  const [activeConversionTab, setActiveConversionTab] = useState("sgpa-to-percent");
  const [sgpa, setSgpa] = useState("");
  const [marks, setMarks] = useState("");
  const [sgpaForMarks, setSgpaForMarks] = useState("");
  const [maxMarks, setMaxMarks] = useState("");
  const [percentageResult, setPercentageResult] = useState(null);
  const [gradeResult, setGradeResult] = useState(null);
  const [totalMarksResult, setTotalMarksResult] = useState(null);

  // Updated to use the imported function
  const handleSGPAToPercentage = () => {
    const result = convertSGPAToPercentage(sgpa);
    setPercentageResult(result);
  };

  // Updated to use the imported function
  const handleMarksToGrade = () => {
    const result = convertMarksToGrade(marks);
    setGradeResult(result);
  };

  // Updated to use the imported function
  const handleSGPAToTotalMarks = () => {
    const result = convertSGPAToTotalMarks(sgpaForMarks, maxMarks);
    setTotalMarksResult(result);
  };

  return (
    <div className="card calculator-card">
      <div className="card-header">
        <h3 className="card-title">
          <ArrowRightLeft className="icon-inline" />
          Conversion Tools
        </h3>
        <p className="card-description">Convert between SGPA, percentage, and marks</p>
      </div>
      <div className="card-content">
        <div className="conversion-tabs">
          <div className="conversion-tabs-list">
            <button 
              className={`conversion-tab ${activeConversionTab === 'sgpa-to-percent' ? 'active' : ''}`}
              onClick={() => setActiveConversionTab('sgpa-to-percent')}
            >
              SGPA → %
            </button>
            <button 
              className={`conversion-tab ${activeConversionTab === 'sgpa-to-marks' ? 'active' : ''}`}
              onClick={() => setActiveConversionTab('sgpa-to-marks')}
            >
              SGPA → Marks
            </button>
            <button 
              className={`conversion-tab ${activeConversionTab === 'marks-to-grade' ? 'active' : ''}`}
              onClick={() => setActiveConversionTab('marks-to-grade')}
            >
              Marks → Grade
            </button>
          </div>

          <div className="conversion-content">
            {activeConversionTab === 'sgpa-to-percent' && (
              <div className="conversion-panel">
                <div className="form-group">
                  <label htmlFor="sgpa-input" className="label">
                    Enter SGPA (0-10)
                  </label>
                  <input
                    id="sgpa-input"
                    type="number"
                    step="0.01"
                    className="input"
                    placeholder="7.34"
                    value={sgpa}
                    onChange={(e) => setSgpa(e.target.value)}
                  />
                </div>
                <button onClick={handleSGPAToPercentage} className="btn btn-primary btn-full"> {/* Updated this line */}
                  <Percent className="icon-small" />
                  Convert to Percentage
                </button>
                {percentageResult !== null && (
                  <div className="result-card conversion-result">
                    <p className="result-label">Percentage</p>
                    <p className="result-value result-large">{percentageResult}%</p>
                  </div>
                )}
              </div>
            )}

            {activeConversionTab === 'sgpa-to-marks' && (
              <div className="conversion-panel">
                <div className="form-group">
                  <label htmlFor="sgpa-marks-input" className="label">
                    Enter SGPA (0-10)
                  </label>
                  <input
                    id="sgpa-marks-input"
                    type="number"
                    step="0.01"
                    className="input"
                    placeholder="7.34"
                    value={sgpaForMarks}
                    onChange={(e) => setSgpaForMarks(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="max-marks-input" className="label">
                    Enter Maximum Marks
                  </label>
                  <input
                    id="max-marks-input"
                    type="number"
                    className="input"
                    placeholder="500"
                    value={maxMarks}
                    onChange={(e) => setMaxMarks(e.target.value)}
                  />
                </div>
                <button onClick={handleSGPAToTotalMarks} className="btn btn-primary btn-full"> {/* Updated this line */}
                  <Calculator className="icon-small" />
                  Convert to Total Marks
                </button>
                {totalMarksResult !== null && (
                  <div className="result-card conversion-result">
                    <p className="result-label">Total Marks</p>
                    <p className="result-value result-large">{totalMarksResult}</p>
                    <p className="result-note">out of {maxMarks}</p>
                  </div>
                )}
              </div>
            )}

            {activeConversionTab === 'marks-to-grade' && (
              <div className="conversion-panel">
                <div className="form-group">
                  <label htmlFor="marks-input" className="label">
                    Enter Marks (0-100)
                  </label>
                  <input
                    id="marks-input"
                    type="number"
                    className="input"
                    placeholder="75"
                    value={marks}
                    onChange={(e) => setMarks(e.target.value)}
                  />
                </div>
                <button onClick={handleMarksToGrade} className="btn btn-primary btn-full"> {/* Updated this line */}
                  <ArrowRightLeft className="icon-small" />
                  Convert to Grade
                </button>
                {gradeResult && (
                  <div className="result-card conversion-result">
                    <div className="grade-result-grid">
                      <div className="result-item">
                        <p className="result-label">Grade</p>
                        <p className="result-value result-large">{gradeResult.grade}</p>
                      </div>
                      <div className="result-item">
                        <p className="result-label">Grade Point</p>
                        <p className="result-value result-large">{gradeResult.gp}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentageConverter;