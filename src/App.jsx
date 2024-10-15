import React, { useState } from "react";
import MarkInputTable from "./components/MarkInputTable";

function App() {
  const [gpa, setGpa] = useState(0); // Lift GPA state to App

  return (
    <>
      <header>
        <h1>
          SRM University <span>GPA Calculator</span>
        </h1>
      </header>

      {/* GPA Progress Section */}
      {gpa > 0 && (
        <section id="gpa-progress">
          <div>
            <h2>GPA: {gpa}</h2>
            <progress max="10" value={gpa}></progress>
          </div>
        </section>
      )}

      {/* Mark Entry Section */}
      <main id="mark-entry">
        <MarkInputTable setGpa={setGpa} /> {/* Pass setGpa as a prop */}
      </main>

      <footer>
        Made by <a href="https://github.com/aadithya2112">Aadithya</a>
      </footer>
    </>
  );
}

export default App;
