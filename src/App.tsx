import "./App.css";
import HomePage from "./HomePage";
import StoreProvider from "./lib/redux_store/provider";

function App() {
  return (
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  );
}

export default App;
