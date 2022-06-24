import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import image1 from './images/2.jpg'
import data from './data';
function App() {

  const cards = data.map(item => {
    return (
      <Card 
      key = {item.id}
      img = {image1}
      // rating = {item.stats.rating}
      // reviewCount = {item.stats.reviewCount}
      // location = {item.location}
      // title = {item.title}
      // price = {item.price}
      // openSpots = {item.openSpots}
      //instead of passing like this we are passing as objects
      item = {item}
      // {...item} spread object as props internally like before
      />

    
    )
  })

  return (
    <>
        <NavBar></NavBar>
        <Hero></Hero>
        <section className='cards-list'>
          {cards}
        </section>
        
    </>
  )
}

export default App;
