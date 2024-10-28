import "./App.css";
import Navbar from "./navbar";
import GameCrad from "./gameCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PreviewPage from "./previewPage";
import About from "./about";
import ContactUs from "./contactUs";
import PrivacyPolicy from "./privacyPolicy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<GameCrad />} />
          <Route path="/preview/:id" element={<PreviewPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
