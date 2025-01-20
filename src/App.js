import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DeviceManagement from './pages/DeviceManagement';
import OtherPage from './pages/OtherPage';
import { AgentProvider } from './context/agent/AgentContext';

const App = () => (
  <AgentProvider>
      <div className='bg-secondary bg-opacity-10' style={{width:"100%"}} >
      <Router>
        <div className="d-flex">
          <Sidebar />
          <div className="flex-grow-1">
            <Header />
            <Routes>
              <Route path="/" element={<DeviceManagement />} />
              <Route path="/device-management" element={<DeviceManagement />} />
              <Route path="/other-page" element={<OtherPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  </AgentProvider>
);

export default App;
