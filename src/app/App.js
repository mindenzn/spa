import { Header,Footer } from "./components/componentsImport";
import { Home,} from "./pages/pagesImports";
import { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  state = {
    isLoading: false,
    error: null,
  };
  
  async componentDidMount() {
    try {
      this.setState({ isLoading: true });

      const response = await fetch(
        "/"
      );
      const json = await response.json();

      if (!response.ok) {
        const error =
          { 404: "The thing you're looking for is not there 🤷‍♂️" }[
            response.status
          ] || "Something went wrong! 😭";

        throw new Error(error);
      }

      this.setState({ movies: json });
    } catch (e) {
      this.setState({ error: e.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading} = this.state;
    if (isLoading) {
      return <div>LOADING. . .</div>;
    } else
      return (
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/">
            </Route>
            <Footer />
          </div>
        </Router>
      );
  }
}
export default App;
