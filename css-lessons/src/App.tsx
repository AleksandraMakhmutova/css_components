import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layout/header/header";
import MainPage from "./layout/mainPage/mainPage";

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <div className="App">
          <Header />
          <MainPage />
        </div>
      </div>

      {/* <Switch>
        <Route path="/about-our-tours">{/* <AboutOurTours /></Route>
      </Switch> */}
    </Router>
  );
}

export default App;
