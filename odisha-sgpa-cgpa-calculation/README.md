<div align="center">

# 🎓 Odisha University SGPA/CGPA Calculator 🎓

<a href="https://readme-typing-svg.herokuapp.com">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=25&duration=4000&pause=1000&color=8B5CF6&background=0F172A00&center=true&width=800&lines=Calculate+SGPA+%26+CGPA+for+Odisha+Universities;Built+with+React%2C+TypeScript%2C+Vite%2C+%26+Tailwind;Features+Shadcn+UI+%26+Conversion+Tools" alt="Typing SVG" />
</a>

<br>

<p>
  A modern, responsive web application designed for students of Odisha Universities (following Utkal University's grading system) to accurately calculate their Semester Grade Point Average (SGPA) and Cumulative Grade Point Average (CGPA). It also includes handy tools for converting between SGPA, percentages, marks, and grades. Built with a robust tech stack including React, TypeScript, Vite, Tailwind CSS, and Shadcn UI components.
</p>

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Badge" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Badge" />
  <img src="https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=shadcn-ui&logoColor=white" alt="Shadcn UI Badge" />
  <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=react-hook-form&logoColor=white" alt="React Hook Form Badge" />
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod Badge" />
</p>
<p align="center">
  <a href="https://odisha-sgpa-cgpa-calculation.vercel.app/" target="_blank"><strong>🚀 View Live Demo 🚀</strong></a>
</p>
</div>

---

## 🚀 About The Project

This application provides a streamlined and user-friendly interface for students to manage and calculate their academic performance metrics according to the Choice Based Credit System (CBCS) commonly used in Odisha universities. It aims to be a reliable tool for tracking progress throughout their academic journey.

<div align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXBqYjliajJ2bTZyZGR2cTdyamV1Z3IybzJ3aG51aDN6dDlvMnRhZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1tvihmEw13a0i5c/giphy.gif" alt="Project Demo GIF" width="800" />
  </div>

<br>

### ✨ Key Features

* **SGPA Calculator:** Dynamically add/remove subjects, input credits and grades, and instantly calculate Semester Grade Point Average.
* **CGPA Calculator:** Add/remove semesters, input SGPA and total credits for each, and calculate the overall Cumulative Grade Point Average.
* **Conversion Tools:**
    * SGPA to Percentage (`% = (SGPA - 0.75) * 10`)
    * Percentage to SGPA (`SGPA = % / 10 + 0.75`)
    * SGPA to Total Marks (requires Max Marks input)
    * Marks (out of 100) to Grade & Grade Point
* **Grading System Reference:** Displays the Utkal University grading scale (O, A+, A, B+, B, C, D, F) with corresponding marks ranges and grade points.
* **Modern UI:** Built with Tailwind CSS and Shadcn UI for a clean, accessible, and responsive user experience.
* **Type Safety:** Developed using TypeScript for enhanced code reliability and maintainability.
* **Efficient Development:** Utilizes Vite for fast builds and an optimized development workflow.

---

### 🧠 Core Functionality & Logic

* **SGPA Calculation:**
    * Takes a list of subjects, each with a `credit` value and a `grade`.
    * Maps each `grade` to its corresponding `gradePoint` (e.g., 'O' -> 10, 'A+' -> 9, etc.) based on the predefined scale.
    * Calculates Credit Points (`CP`) for each subject: `CP = credit * gradePoint`.
    * Sums `totalCP` and `totalCredits` across all valid subjects.
    * Computes `SGPA = totalCP / totalCredits`, formatted to two decimal places.
* **CGPA Calculation:**
    * Takes a list of semesters, each with an `sgpa` and `totalCredits` for that semester.
    * Calculates a weighted sum: `Sum(sgpa * credits)` for all valid semesters.
    * Sums the `totalCredits` across all included semesters.
    * Computes `CGPA = weightedSum / totalCredits`, formatted to two decimal places.
* **State Management:** Uses React's `useState` hook to manage the list of subjects/semesters and the calculated results.

---

## 🛠️ Tech Stack & Tools

This project utilizes a modern frontend stack focused on performance, type safety, and developer experience.

### Languages & Core Libraries
| Category              | Technologies                                                                                                                                                                                                                                                                                              |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Languages** | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" /> <img src="https://img.shields.io/badge/JavaScript (ESNext)-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />                               |
| **UI Framework** | <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" /> <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white" alt="React Router" />                                                |
| **Styling** | <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />                                                        |
| **Component Library** | <img src="https://img.shields.io/badge/Shadcn_UI-000000?style=flat-square&logo=shadcn-ui&logoColor=white" alt="Shadcn UI" /> *(Built upon Radix UI & Tailwind)* |
| **Icons** | <img src="https://img.shields.io/badge/Lucide_React-3C82F6?style=flat-square&logo=lucide&logoColor=white" alt="Lucide React" />                                                                                                                                                                           |

### Development & Build Tools
| Category          | Technologies                                                                                                                                                                                                                                                                                                                      |
| :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Build Tool** | <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />                                                                                                                                                                                                                      |
| **Package Manager** | <img src="https://img.shields.io/badge/Bun-FBF0DF?style=flat-square&logo=bun&logoColor=black" alt="Bun" /> *(Inferred from `bun.lockb`)* |
| **Linting** | <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white" alt="ESLint" /> <img src="https://img.shields.io/badge/TypeScript_ESLint-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript ESLint" />                                                                   |
| **Styling Tools** | <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=flat-square&logo=postcss&logoColor=white" alt="PostCSS" /> <img src="https://img.shields.io/badge/Autoprefixer-DD3735?style=flat-square&logo=autoprefixer&logoColor=white" alt="Autoprefixer" />                                                                      |
| **Form Handling** | <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=flat-square&logo=react-hook-form&logoColor=white" alt="React Hook Form" /> <img src="https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white" alt="Zod" /> *(Validation)* |

---

## 🖥️ Operating System

Built with web technologies, this application is platform-independent. Development and execution are supported on all major operating systems.

<p>
  <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows" />
  <img src="https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS" />
  <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux" />
</p>

---

## 📁 File Tree: odisha-sgpa-cgpa-calculation-

**Root Path:** `c:\Users\ashes\Desktop\React Projects\codex-react\odisha-sgpa-cgpa-calculation-`

```
├── 📁 public
│   └── 📄 robots.txt
├── 📁 src
│   ├── 📁 assets
│   │   └── 🖼️ SGPA_Calc.webp
│   ├── 📁 components
│   │   ├── 📄 CGPACalculator.jsx
│   │   ├── 📄 GradingTable.jsx
│   │   ├── 📄 PercentageConverter.jsx
│   │   └── 📄 SGPACalculator.jsx
│   ├── 📁 lib
│   │   └── 📄 utils.js
│   ├── 📁 pages
│   │   ├── 📄 Index.jsx
│   │   └── 📄 NotFound.jsx
│   ├── 🎨 App.css
│   ├── 📄 App.jsx
│   ├── 📄 main.jsx
│   └── 🎨 styles.css
├── ⚙️ .gitignore
├── 📝 Readme.md
├── 📄 bun.lockb
├── 📄 eslint.config.js
├── 🌐 index.html
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📄 postcss.config.js
├── 📄 tailwind.config.js
├── ⚙️ tsconfig.app.json
├── ⚙️ tsconfig.json
├── ⚙️ tsconfig.node.json
└── 📄 vite.config.js
```
---

## 🏁 Getting Started

Follow these steps to get a local copy running.

### Prerequisites

* **Bun:** This project uses Bun as the package manager and runtime. Install it from [bun.sh](https://bun.sh/).

### Installation

1.  **Clone the repo**
    ```sh
    git clone [https://github.com/your-username/odisha-sgpa-cgpa-calculation.git](https://github.com/your-username/odisha-sgpa-cgpa-calculation.git)
    ```
2.  **Navigate to the project directory**
    ```sh
    cd odisha-sgpa-cgpa-calculation/odisha-sgpa-cgpa-calculation-
    ```
3.  **Install dependencies using Bun**
    ```sh
    bun install
    ```

### Running the Application

1.  **Start the development server (using Vite)**
    ```sh
    bun dev
    ```
    The application will open in your browser, typically at `http://localhost:8080`.

2.  **Build for production**
    ```sh
    bun run build
    ```
    This creates an optimized production build in the `dist` folder.
