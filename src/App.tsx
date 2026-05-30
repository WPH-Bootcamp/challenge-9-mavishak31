import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';

export default function App() {
  // TODO: Setup routing dengan React Router
  // TODO: Implement layout structure
  // TODO: Add navigation between pages

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
