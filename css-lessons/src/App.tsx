import { BrowserRouter as Router } from "react-router-dom";
import FeaturesPart from "./pages/featuersPart/featuresPart";
import Header from "./pages/header/header";
import MainPage from "./pages/mainPage/mainPage";

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <div className="App">
          <Header />
          <MainPage />
          <FeaturesPart />
        </div>
      </div>

      {/* <Switch>
        <Route path="/about-our-tours">{/* <AboutOurTours /></Route>
      </Switch> */}
    </Router>
  );
}

export default App;
