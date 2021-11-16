import { BrowserRouter as Router } from "react-router-dom";
import Header from "./pages/header/header";
import MainPage from "./pages/mainPage/mainPage";

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
