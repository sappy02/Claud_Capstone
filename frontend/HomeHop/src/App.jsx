import './App.css'
import Navbar from './components/NavBar.jsx'
import Experience from './components/Experience.jsx'
import Tile from './components/Tile.jsx'
import '@fontsource/poppins';
import HostData from './data/HostData'
function App() {
  const hostData = HostData.map (data => {
    return <Card 
          key = {data.id}
          {...data}
          />
  })
  return (
    <div >
        <Navbar />
        <Info />
      <section className = "cards-list"> 
        {hostData}
      </section>
    </div>

  )
}

export default App
