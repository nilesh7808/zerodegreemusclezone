import Navbar from "./components/Navbar";
import Slideshhow from "./components/Slideshhow";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Updates from "./pages/Updates";
import About from './pages/About';
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshhow />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="updates" element={<Updates />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
