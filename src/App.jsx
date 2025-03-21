import ColorsManager from "./components/ColorsManager";
import DoNotClickMe from "./components/DoNotClickMe";
import { SnackbarProvider } from "notistack";
import "./App.css";

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
