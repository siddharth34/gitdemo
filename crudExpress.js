const express = require("express");
const app = express();
const PORT = 3000;

// Sample Data
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Student-Course API!");
});

// -------- Students Routes --------
app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find(s => s.id === studentId);

  if (student) {
    res.json(student);
  } else {
    res.status(404).send("Student not found");
  }
});

// -------- Courses Routes --------
app.get("/courses", (req, res) => {
  res.json(courses);
});

app.get("/courses/:id", (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find(c => c.id === courseId);

  if (course) {
    res.json(course);
  } else {
    res.status(404).send("Course not found");
  }
});

// -------- 404 Handler --------
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
