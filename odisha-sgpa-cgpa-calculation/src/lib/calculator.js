// Grade points constant, as it's used by multiple functions
const gradePoints = {
  O: 10,
  "A+": 9,
  A: 8,
  "B+": 7,
  B: 6,
  C: 5,
  D: 4,
  F: 0,
};

/**
 * Calculates SGPA from a list of subjects.
 * @param {Array} subjects - Array of subject objects ({ credit: string, grade: string }).
 * @returns {Object|null} - Object with sgpa, totalCredits, and totalCP, or null if no credits.
 */
export const calculateSGPA = (subjects) => {
  let totalCredits = 0;
  let totalCP = 0;

  for (const subject of subjects) {
    const credit = parseFloat(subject.credit);
    const gp = gradePoints[subject.grade];

    if (!isNaN(credit) && gp !== undefined) {
      totalCredits += credit;
      totalCP += credit * gp;
    }
  }

  if (totalCredits > 0) {
    const sgpa = totalCP / totalCredits;
    return { sgpa: parseFloat(sgpa.toFixed(2)), totalCredits, totalCP };
  }
  return null;
};

/**
 * Calculates CGPA from a list of semesters.
 * @param {Array} semesters - Array of semester objects ({ sgpa: string, credits: string }).
 * @returns {Object|null} - Object with cgpa and totalCredits, or null if no credits.
 */
export const calculateCGPA = (semesters) => {
  let totalCredits = 0;
  let weightedSum = 0;

  for (const semester of semesters) {
    const sgpa = parseFloat(semester.sgpa);
    const credits = parseFloat(semester.credits);

    if (!isNaN(sgpa) && !isNaN(credits)) {
      totalCredits += credits;
      weightedSum += sgpa * credits;
    }
  }

  if (totalCredits > 0) {
    const cgpa = weightedSum / totalCredits;
    return { cgpa: parseFloat(cgpa.toFixed(2)), totalCredits };
  }
  return null;
};

/**
 * Converts SGPA to its approximate percentage.
 * @param {number|string} sgpa - The SGPA value (0-10).
 * @returns {number|null} - The calculated percentage or null.
 */
export const convertSGPAToPercentage = (sgpa) => {
  const sgpaValue = parseFloat(sgpa);
  if (!isNaN(sgpaValue) && sgpaValue >= 0 && sgpaValue <= 10) {
    const result = (sgpaValue - 0.75) * 10;
    return parseFloat(result.toFixed(2));
  }
  return null;
};

/**
 * Converts Marks (out of 100) to a grade and grade point.
 * @param {number|string} marks - The marks value (0-100).
 * @returns {Object|null} - Object with grade and gp, or null.
 */
export const convertMarksToGrade = (marks) => {
  const marksValue = parseFloat(marks);
  if (isNaN(marksValue) || marksValue < 0 || marksValue > 100) {
    return null;
  }

  if (marksValue >= 90) return { grade: "O", gp: 10 };
  if (marksValue >= 80) return { grade: "A+", gp: 9 };
  if (marksValue >= 70) return { grade: "A", gp: 8 };
  if (marksValue >= 60) return { grade: "B+", gp: 7 };
  if (marksValue >= 50) return { grade: "B", gp: 6 };
  if (marksValue >= 45) return { grade: "C", gp: 5 };
  if (marksValue >= 40) return { grade: "D", gp: 4 };
  return { grade: "F", gp: 0 };
};

/**
 * Converts SGPA to total marks based on a maximum.
 * @param {number|string} sgpa - The SGPA value (0-10).
 * @param {number|string} maxMarks - The maximum marks for the semester.
 * @returns {number|null} - The calculated total marks or null.
 */
export const convertSGPAToTotalMarks = (sgpa, maxMarks) => {
  const sgpaValue = parseFloat(sgpa);
  const maxMarksValue = parseFloat(maxMarks);
  
  if (!isNaN(sgpaValue) && sgpaValue >= 0 && sgpaValue <= 10 && !isNaN(maxMarksValue) && maxMarksValue > 0) {
    const percentage = (sgpaValue - 0.75) * 10;
    const totalMarks = (percentage / 100) * maxMarksValue;
    return parseFloat(totalMarks.toFixed(2));
  }
  return null;
};