
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("/api/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student records:", error);
      });
  }, []);

  return (
    <div>
      <h1>Student Skill Records</h1>

      {students.length === 0 ? (
        <p>No student records available.</p>
      ) : (
        students.map((student, index) => (
          <div key={student._id || student.id || index}>
            <pre>{JSON.stringify(student, null, 2)}</pre>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
