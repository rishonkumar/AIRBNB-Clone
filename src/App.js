import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import logo1 from './images/k.png'
function App() {
  return (
    <>
        <NavBar></NavBar>
        {/* <Hero></Hero> */}
        <Card 
          img = {logo1}
          rating = "5.0"
          reviewCount = {6}
          country = "INDIA"
          title = "Raees"
          price = {136}
        >

        </Card>
    </>
  )
}

export default App;
