import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/home";
import UserProfile from "./components/userProfile/userProfile";
import Shopping from "./components/shopping/shopping";
import Legal from "./components/legal/legal";
import InterestCalculator from "./components/interestCalculator/interestCalculator";

// Creating a website for fictitious clothing brand

function App() {
  return (
    <>
      {/* Displaying the header on every page of the website */}
      <Header />
      {/* Creating routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/Legal" element={<Legal />} />
        <Route path="/InterestCalculator" element={<InterestCalculator />} />
      </Routes>
    </>
  );
}

export default App;
