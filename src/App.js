import Sidebar from "./containers/Sidebar";
import Navbar from "./containers/Navbar";
import Main from "./containers/Main";
import "./app.scss";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <div className="navmain">
          <Navbar className="navbar" />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
