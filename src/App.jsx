import ColorsManager from "./components/ColorsManager";
import { SnackbarProvider } from "notistack";
import "./App.css";
import DoNotClickMe from "./components/DoNotClickMe";

function App() {
  return (
    <>
      <SnackbarProvider>
        <ColorsManager />
      </SnackbarProvider>
      <DoNotClickMe />
    </>
  );
}

export default App;
