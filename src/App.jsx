import React from "react";
import MarkInputTable from "./components/MarkInputTable";

function App() {
  return (
    <>
      <header>
        <h1>
          SRM University <span>GPA Calculator</span>
        </h1>
        <section id="mark-entry">
          <MarkInputTable />
        </section>
      </header>
      <footer>
        Made by <a href="https://github.com/aadithya2112">Aadithya</a>
      </footer>
    </>
  );
}

export default App;
