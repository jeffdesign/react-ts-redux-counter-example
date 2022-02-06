import { Counter } from "./features/counter/View";
import { Header } from "./features/header/View";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Counter />
      </header>
    </div>
  );
}

export default App;
