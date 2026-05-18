import { FinanceProvider, useFinance } from './Components/FinanceContext';
import Auth from './Components/Auth';
import Dashboard from './Components/Dashboard';

function AppContent() {
  const { user } = useFinance();

  // Route guarding conditional execution block
  if (!user) {
    return <Auth />;
  }

  return <Dashboard />;
}

export default function App() {
  return (
    <FinanceProvider>
      <AppContent />
    </FinanceProvider>
  );
}