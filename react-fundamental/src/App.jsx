import './App.css'
import Home from './pages/index'
import { GlobalContext } from './context'
function App() {
  const user = {
    username : 'Rifqi Febrianto'
  }
  return (
    <>
    <GlobalContext.Provider value={user}>
      <Home />
    </GlobalContext.Provider>
      
    </>
  )
}

export default App
