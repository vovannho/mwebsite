import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';


function App() {
  return (
    <div className="w-full h-screen px-[120px] py-[40px] bg-[#ffffff] ">
      <Routes>
        <Route path="/" element={ <Home/> } />
      </Routes>
     
    </div>
  );
}

export default App;
