import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FirstPage from './components/FirstPage';
import FinalPage from './components/FinalPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={FirstPage} />
        <Route path='/confirm' Component={FinalPage} />
      </Routes>
    </Router>
  );
}

export default App;
