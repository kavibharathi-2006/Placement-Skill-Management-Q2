
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const students = [
  {
    id: 1,
    name: "Arun",
    department: "IT",
    skills: ["HTML", "CSS", "JavaScript"]
  }
];

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.post("/api/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    department: req.body.department,
    skills: req.body.skills
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
