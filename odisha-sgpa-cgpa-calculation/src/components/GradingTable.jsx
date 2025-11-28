import { BookOpen } from "lucide-react";
import "../styles.css";

// Moved outside the component
const gradingData = [
  { grade: "O", qualification: "Outstanding", marks: "90-100", gp: "10" },
  { grade: "A+", qualification: "Excellent", marks: "80-89", gp: "9" },
  { grade: "A", qualification: "Very Good", marks: "70-79", gp: "8" },
  { grade: "B+", qualification: "Good", marks: "60-69", gp: "7" },
  { grade: "B", qualification: "Above Average", marks: "50-59", gp: "6" },
  { grade: "C", qualification: "Fair", marks: "45-49", gp: "5" },
  { grade: "D", qualification: "Pass", marks: "40-44", gp: "4" },
  { grade: "F", qualification: "Failed", marks: "Below 40", gp: "0" },
];

const GradingTable = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">
          <BookOpen className="icon-inline" />
          Grading System Reference
        </h3>
        <p className="card-description">Utkal University grading system for Odisha students</p>
      </div>
      <div className="card-content">
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Grade</th>
                <th>Qualification</th>
                <th>Marks (%)</th>
                <th className="text-right">Grade Point</th>
              </tr>
            </thead>
            <tbody>
              {gradingData.map((item) => ( // This line will still work
                <tr key={item.grade}>
                  <td className="grade-cell">{item.grade}</td>
                  <td>{item.qualification}</td>
                  <td>{item.marks}</td>
                  <td className="text-right gp-cell">{item.gp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="info-box">
          <p className="info-title">Important Notes:</p>
          <ul className="info-list">
            <li>SGPA = Total Credit Points (CP) ÷ Total Credits</li>
            <li>Credit Points (CP) = Credit × Grade Point</li>
            <li>Percentage ≈ (SGPA - 0.75) × 10</li>
            <li>Minimum 40% marks required to pass</li>
            <li>Based on CBCS (Choice Based Credit System)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GradingTable;