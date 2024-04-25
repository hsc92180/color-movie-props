import "./App.css";
import ColorCard from "./components/ColorCard";
import MovieCard from "./components/MovieCard";
function App() {
  return (
    <>
      <h1>Color Cards</h1>
      <div className="container">
        <ColorCard color="Red" code="#C90B0B" />
        <ColorCard color="Green" code="#0B9C0B" />
        <ColorCard color="Blue" code="#0B0BCF" />
        <ColorCard color="Yellow" code="#CF0B0B" />
        <ColorCard color="Black" code="#000000" />
        <ColorCard color="Purple" code="#0B0BCF" />
        <ColorCard color="Orange" code="#CF0B0B" />
        <ColorCard color="Pink" code="#CF0B0B" />
        <ColorCard color="Grey" code="#0B0B0B" />
        <ColorCard color="Brown" code="#C14811" />
        <ColorCard color="Cyan" code="#00FFFF" />
        <ColorCard color="cadetblue" code="#5F9EA0" />
      </div>
      <div>
        <MovieCard bgimg="https://screenrant.com/wp-content/uploads/2017/12/Bright-movie-banner.jpg" img="https://www.showbizjunkies.com/wp-content/uploads/2017/11/bright-movie-poster.jpg" name="Bright" date="2017,David Ayer" time="117 min" type="Action,Crime,Fantasy" description="Set in a world where fantasy creatures live side by side with humans.A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for."/>
        <MovieCard bgimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeRV7TQLPCABc2-tHs7ur5k23JF62tjcFQQ&s" img="https://tse2.mm.bing.net/th?id=OIP.JdfWjoz65o7UEdor2uh71wHaLH&pid=Api&P=0&h=180" name="Tomb Raider" date="2018,Roar Uthaug" time="125 min" type="Action,Fantasy" description="Lara croft,the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared."/>
      </div>
    </>
  );
}

export default App;
