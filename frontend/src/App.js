import "./App.css";
import Register from "./components/register/Register";
import Signin from "./components/signin/Signin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
      
        <Route exact path='/' element={<Signin/>}/>
        <Route exact path='/signup' element={<Register/>}/>
        
      </Routes>
    </Router>

  )};

export default App;
