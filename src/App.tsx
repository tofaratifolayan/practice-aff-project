import "./App.css";
import HomePage from "@/pages/HomePage";
import StoreProvider from "@/lib/redux_store/provider";

function App() {
  return (
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  );
}

export default App;
