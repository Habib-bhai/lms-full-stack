export default function Navbar() {
    return <>
    <div className="nav">
      <div className="logo"></div>
    <h2>BROS RECIPES</h2>
    <ul className="list">
        <a href="/"><li>HOME</li></a>
        <a href="/aboutus"><li>ABOUT</li></a>
        <a href="/recipe"><li>RECIPE</li></a>
    </ul>
    </div>
    </>
}