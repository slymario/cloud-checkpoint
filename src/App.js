import './App.css';
import Contact from './components/Contact';
import Map from './components/Map';

const location = {
  address: 'Lagos NG, 9 Emma Abimbola Cole, Lekki Phase 1 106104, Street',
  lat: 6.4426349, 
  lng: 3.4760261, 
};

function App() {
  return (
    <div className="App">
      <Contact/>
      <Map location={location} zoomLevel={10} />
    </div>
  );
}

export default App;