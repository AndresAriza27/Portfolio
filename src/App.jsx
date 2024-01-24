import { Contact } from "./components/Contact"
import { Header } from "./components/Header"
import { Information } from "./components/Information"
import { Jumbotron } from "./components/Jumbotron"
import { Tecnologies } from "./components/Tecnologies"
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <div className="hed">
        <Header />
      </div> 
      <div className="bdy">
        <Jumbotron /> 
        <Tecnologies />
        <Information />
        <Contact />
      </div>    
    </div>
  )
}

export default App
