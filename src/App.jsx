import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Wheel } from "./components/Wheel";
import { Rewards } from "./components/Rewards";
import { Profile } from "./components/Profile";
import { History } from "./components/History";
import { Shop } from "./components/Shop";

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>Wheel of Fortune</h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Wheel</Link></li>
              <li><Link to="/rewards">My Rewards</Link></li>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </ul>
          </nav>
        </header>

        <main className="content" style={{ paddingTop: "100px" }}>
          <Routes>
            <Route path="/" element={<Wheel animated={true} speed={5} />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/history" element={<History />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 Wheel of Fortune. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
