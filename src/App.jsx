
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Wheel } from "./components/Wheel";
import { Rewards } from "./components/Rewards";
import { Profile } from "./components/Profile";
import { History } from "./components/History.jsx";
import { Shop } from "./components/Shop";

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
                <nav className="mb-4">
                    <ul className="flex gap-4">
                        <li><Link to="/">Wheel</Link></li>
                        <li><Link to="/rewards">My Rewards</Link></li>
                        <li><Link to="/history">History</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Wheel animated={true} speed={5} />} />
                    <Route path="/rewards" element={<Rewards />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
