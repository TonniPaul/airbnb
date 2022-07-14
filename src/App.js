import Nav from "./components/Nav";
import Gallery from "./components/Gallery"
import Courosel from "./components/Courosel";
import data from ".//components/data"

function App() {
  const cards =data.map(item =>{
    return (
      <Courosel 
        key ={item.id}
        item= {item}
      />
    )
  })
  return (
    <div className="App">
      <Nav/>
      <div className="section">
        <Gallery/>
        <div className="flex">
          {cards}
        </div>
      </div>
    </div>
  );
}

export default App;
