import "./App.scss";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        testlink
        <div>
          <button className="btn">
            <Link to="/Admin">Admin page</Link>
          </button>
          <button className="btn">
            <Link to="/User">User page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
