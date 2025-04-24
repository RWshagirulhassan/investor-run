// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import PlayerDetailPage from "./pages/player_detail_page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail" element={<PlayerDetailPage />} />
      {/* add more pages here */}
    </Routes>
  );
}

export default App;
