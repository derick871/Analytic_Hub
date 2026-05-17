import { Dashboard } from "./Components/Dashboard"
import FinanceContext, { FinanceProvider } from "./Components/FinanceContext"

function App() {
  return (
    <>
     <FinanceProvider>
      <FinanceContext/>
      <Dashboard/>
     </FinanceProvider>
     
    
    </>
  )
}

export default App