import Card from "./components/card";
import './components/CSS/App.css'
import camaro from './assets/images/camaro.jpg'
function App() {
  return (
    <div className="container">
      <Card
       
       picture={camaro}
       Name="Camaro"
       description="Chevrolt is an iconic American car brand known for it's reliable, dependable and affordable 
       vehicles. Founded in 1911, chevy has become one of the most recognizeable car brands in the world."
       leftButton="Share"
       rightButton="Learn More"

       />
    </div>
  )
}

export default App;
