import { CardComponent, HeaderComponent } from "./comps";
import "./css/style.css";
import headerPhoto from "../src/images/marvel.jpg";
import card1Photo from "../src/images/bat-man.jpg";
import card2Photo from "../src/images/iron-man.jpg";
import card3Photo from "../src/images/spider-man.jpg";
import { headerDesc, cardDesc, title } from "./services/tools";
function App() {
  return (
    <div className="container">
      <HeaderComponent url={headerPhoto} title={title} desc={headerDesc} />
      <aside>
        <ul class="list-style">
          <CardComponent url={card1Photo} title={title} desc={cardDesc} />
          <CardComponent url={card2Photo} title={title} desc={cardDesc} />
          <CardComponent url={card3Photo} title={title} desc={cardDesc} />
        </ul>
      </aside>
    </div>
  );
}

export default App;
