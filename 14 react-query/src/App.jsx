import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReactQueryPage from './pages/ReactQueryPage';
import NormalPage from './pages/NormalPage';
import AdvanceReactQuery from './pages/AdvanceReactQuery';

function App() {
  return (
    <div className="App">
      <nav style={{ backgroundColor: 'beige', padding: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>
          HomePage
        </Link>
        <Link to="/normal" style={{ marginRight: '10px' }}>NormalPage</Link>
        <Link to="/react-query" style={{ marginRight: '10px' }}>ReactQueryPage</Link>
        <Link to="/advance-react-query" style={{ marginRight: '10px' }}>AdvanceReactQuery</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/normal" element={<NormalPage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
        <Route path="/advance-react-query" element={<AdvanceReactQuery />} />
      </Routes>
    </div>
  );
}

export default App;
