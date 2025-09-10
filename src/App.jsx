import Navbar from './components/Navbar'
import Card from './components/Card'
import ScoreBoard from './components/ScoreBoard'
import Form from './components/Form'
import { PokeProvider } from './context/PokeContext'


const App = () => {
  return (
    <PokeProvider>
      <Navbar />

      <div className="p-8 min-h-screen">
        <h1 className="text-center text-2xl font-semibold">Who's That Pokemon?</h1>
        <Card />
        <ScoreBoard />
        <Form />
      </div>

    </PokeProvider>
  )
}

export default App
