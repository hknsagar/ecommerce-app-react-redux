import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import routes from "./routes";

function App() {
  return (
    <>
      <Header />
      {routes.map((route, idx) => (
        <Route key={idx} exact={route.exact} path={route.path} component={route.component} />
      ))}
    </>
  );
}

export default App;
