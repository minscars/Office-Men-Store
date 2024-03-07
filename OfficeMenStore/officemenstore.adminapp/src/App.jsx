import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Auth, Test } from '@/layouts';

function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/test/*" element={<Test />} />
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  );
}

export default App;
