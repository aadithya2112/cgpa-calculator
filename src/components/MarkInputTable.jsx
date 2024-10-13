import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid
import TableInput from "./TableInput";
import calculateGpa from "../utils/calculateGpa";

function MarkInputTable() {
  const [inputArray, setInputArray] = useState([
    { id: uuidv4(), credits: "", grade: "O" },
    { id: uuidv4(), credits: "", grade: "O" },
    { id: uuidv4(), credits: "", grade: "O" },
    { id: uuidv4(), credits: "", grade: "O" },
    { id: uuidv4(), credits: "", grade: "O" },
  ]);

  const [gpa, setGpa] = useState(0);

  function handleCreditsChange(index, newCredits) {
    // Update credits without changing to integer until submission
    const updatedInputArray = [...inputArray];
    updatedInputArray[index].credits = newCredits; // Keep as string
    setInputArray(updatedInputArray);
  }

  function handleGradeChange(index, newGrade) {
    const updatedInputArray = [...inputArray];
    updatedInputArray[index].grade = newGrade;
    setInputArray(updatedInputArray);
  }

  function handleAddCourse() {
    setInputArray([
      ...inputArray,
      {
        id: uuidv4(), // Generate a new unique id for each course
        credits: "", // Start with an empty string for credits
        grade: "O",
      },
    ]);
  }

  function handleRemoveInput(index) {
    const updatedInputArray = inputArray.filter((_, i) => i !== index);
    setInputArray(updatedInputArray);
  }

  function handleSubmit() {
    // Convert credits to integers for GPA calculation
    const gpa = calculateGpa(
      inputArray.map((item) => ({
        credits: parseInt(item.credits, 10) || 0, // Convert to integer for calculation
        grade: item.grade,
      }))
    );
    console.log("GPA:", gpa);
    setGpa(gpa);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Course #</td>
            <td>Credits</td>
            <td>Grade</td>
          </tr>
        </thead>
        <tbody>
          {inputArray.map((input, index) => (
            <TableInput
              key={input.id} // Use the `uuid` as the key
              courseNumber={index + 1} // Ensure the course number is always in sequence
              credits={input.credits}
              grade={input.grade}
              handleCreditsChange={(newCredits) =>
                handleCreditsChange(index, newCredits)
              }
              handleGradeChange={(newGrade) =>
                handleGradeChange(index, newGrade)
              }
              handleRemoveInput={() => handleRemoveInput(index)}
            />
          ))}
        </tbody>
      </table>
      <button onClick={handleAddCourse}>Add course</button>
      <br />
      <button onClick={handleSubmit}>Submit</button>

      {/* conditional render gpa with progress bar*/}
      {gpa > 0 && (
        <div>
          <h2>GPA: {gpa}</h2>
          <progress max="10" value={gpa}></progress>
        </div>
      )}
    </>
  );
}

export default MarkInputTable;
