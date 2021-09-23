import "./App.css";
import Loader from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loader type="Hearts" color="gray" height={500} width={500} />
      </header>
    </div>
  );
}

export default App;
