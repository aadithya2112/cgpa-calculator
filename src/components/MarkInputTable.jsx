import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TableInput from "./TableInput";
import calculateGpa from "../utils/calculateGpa";

function MarkInputTable({ setGpa }) {
  // Accept setGpa as prop
  const [inputArray, setInputArray] = useState([
    { id: uuidv4(), credits: "", grade: "O" },
    { id: uuidv4(), credits: "", grade: "O" },
    { id: uuidv4(), credits: "", grade: "O" },
    { id: uuidv4(), credits: "", grade: "O" },
    { id: uuidv4(), credits: "", grade: "O" },
  ]);

  function handleCreditsChange(index, newCredits) {
    const updatedInputArray = [...inputArray];
    updatedInputArray[index].credits = newCredits;
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
        id: uuidv4(),
        credits: "",
        grade: "O",
      },
    ]);
  }

  function handleRemoveInput(index) {
    const updatedInputArray = inputArray.filter((_, i) => i !== index);
    setInputArray(updatedInputArray);
  }

  function handleSubmit() {
    const gpa = calculateGpa(
      inputArray.map((item) => ({
        credits: parseInt(item.credits, 10) || 0,
        grade: item.grade,
      }))
    );
    setGpa(gpa); // Update GPA in the parent component
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>Credits</td>
            <td>Grade</td>
          </tr>
        </thead>
        <tbody>
          {inputArray.map((input, index) => (
            <TableInput
              key={input.id}
              courseNumber={index + 1}
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

      <div className="add-calc-div">
        <button onClick={handleAddCourse}>Add course</button>
        <button onClick={handleSubmit}>Calculate</button>
      </div>
    </>
  );
}

export default MarkInputTable;
