import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layout/header/header";

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <div className="App">
          <Header />
        </div>
      </div>

      {/* <Switch>
        <Route path="/about-our-tours">{/* <AboutOurTours /></Route>
      </Switch> */}
    </Router>
  );
}

export default App;
