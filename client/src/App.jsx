import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Login from "./Body/Login/Login";
import Signup from "./Body/Signup/Signup";
import Ide from "./Body/Ide/Ide";
import Main from "./Body/Main/main";
import Assignment from "./Body/Assignment/Assignment"
import Admin from "./Body/Admin/Admin"
import QuestionAdd from "./Body/Admin/Question";

import "./App.css";
function App() {
   document.title = "Hackbyte";

   
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar /><Main/></>} />
          <Route exact path="/assignments" element={<><Navbar /><Assignment/></>} />
          <Route
            exact
            path="/assignments/:course_id"
            element={<h1>Course Assignments</h1>}
          />
          <Route exact path="/ide" element={<><Navbar /><Ide/></>} />
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
          <Route path="/login" element={<><Navbar /><Login /></>} />
          <Route path="/signup" element={<><Navbar /><Signup /></>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/questionadd" element={<QuestionAdd />} />


          <Route exact path="*" element={<h1>Main</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
