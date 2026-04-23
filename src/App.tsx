import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SignIn from './pages/SignIn';
import LoginSuccess from './pages/LoginSuccess';
import UpdatePassword from './pages/UpdatePassword';
import SecurityVerification from './pages/SecurityVerification';
import MFAVerification from './pages/MFAVerification';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignIn />} />
          <Route path="success" element={<LoginSuccess />} />
          <Route path="update-password" element={<UpdatePassword />} />
          <Route path="verify" element={<SecurityVerification />} />
          <Route path="mfa" element={<MFAVerification />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
