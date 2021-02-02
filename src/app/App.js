import { Header,Footer } from "./components/componentsImport";
import { Home,} from "./pages/pagesImports";
import { Component } from "react";

import { BrowserRouter as Router,Route,} from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
      return (
        <Router>
          <div className="App">
            <Header />
            <Home/>
            <Footer />
          </div>
        </Router>
      );
  }
}
export default App;
