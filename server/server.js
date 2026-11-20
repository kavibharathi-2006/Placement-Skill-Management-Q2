
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

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
