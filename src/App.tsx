import EmojiFinder from './components/EmojiFinder'
import './App.css'

function App() {
  return (
    <main className="page">
      <header className="header">
        <h1>Emoji Finder</h1>
        <p className="subtitle">Find emoji by keywords</p>
      </header>

      <EmojiFinder />
    </main>
  )
}

export default App