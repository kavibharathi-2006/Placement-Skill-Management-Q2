
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [skills, setSkills] = useState("");

  useEffect(() => {
    axios.get("/api/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student records:", error);
      });
  }, []);

  const addStudent = (e) => {
    e.preventDefault();

    const newStudent = {
      name: name,
      department: department,
      skills: skills.split(",").map((skill) => skill.trim())
    };

    axios.post("/api/students", newStudent)
      .then((response) => {
        setStudents([...students, response.data]);
        setName("");
        setDepartment("");
        setSkills("");
      })
      .catch((error) => {
        console.error("Error adding student:", error);
      });
  };

  return (
    <div>
      <h1>Student Skill Records</h1>

      <h2>Add Student Skills</h2>

      <form onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="text"
          placeholder="Skills (HTML, CSS, JavaScript)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Add Student</button>
      </form>

      <h2>Student Skill List</h2>

      {students.length === 0 ? (
        <p>No student records available.</p>
      ) : (
        students.map((student) => (
          <div key={student.id}>
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Department: {student.department}</p>
            <p>Skills: {student.skills.join(", ")}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default App;
