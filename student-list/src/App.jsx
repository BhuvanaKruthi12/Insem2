import React, { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  const addName = () => {
    if (name.trim() !== "") {
      setStudents([...students, name]);
      setName("");
    }
  };

  return (
    <div>
      <h2>Student Names List</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter student name"
      />

      <button onClick={addName}>Add</button>

      <h3>Students:</h3>

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
