import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import AppNavbar from "./AppNavbar";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
