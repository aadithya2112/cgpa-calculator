import React from "react";

function TableInput({
  courseNumber,
  credits,
  grade = "O",
  handleCreditsChange,
  handleGradeChange,
  handleRemoveInput,
}) {
  return (
    <tr>
      <td>{courseNumber}</td>
      <td>
        <input
          type="number"
          defaultValue={credits}
          onChange={(e) => handleCreditsChange(e.target.value)}
        />
      </td>
      <td>
        <select
          defaultValue={grade}
          onChange={(e) => handleGradeChange(e.target.value)}
        >
          <option>O</option>
          <option>A+</option>
          <option>A</option>
          <option>B+</option>
          <option>B</option>
          <option>C</option>
          <option>W</option>
          <option>F</option>
          <option>Ab</option>
        </select>
      </td>
      <td>
        <button onClick={handleRemoveInput}>-</button>
      </td>
    </tr>
  );
}

export default TableInput;
