import "./App.css";
import Bouton from "./components/Bouton";
import Checkbox from "./components/Checkbox";

import { Route, Routes} from react-router-dom;


function App() {

    const [on, setOn] = useState(true);

    const change = () =>{
      setOn(!on);
    };
    return (
      <>

      <Route path="/contact* element ={<ContactList"/>
      </>

    )

}

export default App;

