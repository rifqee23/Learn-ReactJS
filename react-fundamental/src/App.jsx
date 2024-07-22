import './App.css'
import Article from './components/Article'

function App() {
  return (
    <>
      <Article name="Rifqi" title={["ReactJs", "NextJs", "NodeJs"]} />
      <br/>
      <Article name="Febrianto" title={["VueJs", "NuxtJs", "Bun"]} />
      
    </>
  )
}

export default App
