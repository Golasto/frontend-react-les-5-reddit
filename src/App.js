import './App.css';
import './pages/home/Home'
import {Header} from "./components/header/Header";
import { Fetch } from "./components/Fetch/Fetch";

function App() {

  return (
      <>
<Header></Header>

          <div className="titel">
              <h2 className="hottest">Hottest posts</h2>
              <h4>on Reddit right now</h4>
                  <Fetch></Fetch>
          </div>
      </>

  );
}

export default App
