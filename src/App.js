import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import AuthRootComponent from "./components/Auth";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path ="/" element={ <HomePage/>}/>
            <Route path ="/login" element={ <AuthRootComponent/>}/>
            <Route path ="/register" element={ <AuthRootComponent/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
