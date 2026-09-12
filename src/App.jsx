import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import AppNavbar from "./AppNavbar";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <header>
          <AppNavbar />
        </header>
        <main id="app-container">
          <AppRouter />
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
