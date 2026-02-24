import {Routes, Route} from "react-router-dom"
import { HomePage, ForzaPage, TimeAttackPage, DriftPage, ErrorPage } from "./pages";
import { NavBar } from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
