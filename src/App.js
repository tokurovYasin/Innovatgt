import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthRootComponent from "./pages/Auth";


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
