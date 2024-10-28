import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css'
import { Navbar } from "./components/navbar";
import { Auth } from "./pages/auth";
import { Home } from "./pages/home";
import { Rated } from "./pages/rated";
function App() {
  

  return (
   <div>

    <Router>
      <Navbar/>
       <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/rated" element={<Rated/>}/>
       </Routes>

    </Router>
   </div>

  );
  
      
}

export default App
