import "./main.css"
import Navbar from "./components/navbar"
import Card from "./components/card"

export default function Hello() {
  return ( <>
  <Navbar/>
    <h1 className="firstHeading">POPULAR RECIPES</h1>
    <div className="CardParent">
    <Card url="/asset/meatball.png" href="/recipe/popular/meatBall" title="Easy Meat Balls"/>
    <Card url="/asset/steak.png" href="/recipe/popular/steak"  title="Best Steak & Veggies" />
    <Card url="/asset/bakedEgg.png"  href="/recipe/popular/bakedEgg" title="Baked Eggs in Blanket" />
    <Card url="/asset/raspberry.png" href="/recipe/popular/raspberry" title="Home-made Raspberry" />
    </div>
  </>
  )
}

