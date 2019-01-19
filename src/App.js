import React from "react";
import routes from "./routes";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />
        {routeComponents}

        
      </div>
    </Router>
  );
}

export default App;
