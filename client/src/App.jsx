import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Login from "./Body/Login/Login";
import Signup from "./Body/Signup/Signup";
import Ide from "./Body/Ide/Ide";

import "./App.css";
function App() {
   document.title = "Hackbyte";

   
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/assignments" element={<h1>Courses List</h1>} />
          <Route
            exact
            path="/assignments/:course_id"
            element={<h1>Course Assignments</h1>}
          />
          <Route exact path="/ide" element={<Ide />} />
          <Route
            exact
            path="/assignments/:course_id/:assignment"
            element={<h1>Assignment Page</h1>}
          />
          <Route
            exact
            path="/assignments/:assignment/:question_id"
            element={<h1>Submit Code</h1>}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="*" element={<h1>Main</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
