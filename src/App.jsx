import { CssBaseline } from "@mui/material";
import "./App.css";
import Routes from "./routes";
import Theme from "./theme";
import {AuthContextProvider} from "./contexts/auth/AuthContextProvider"
function App() {
  return (
    <AuthContextProvider>
      <Theme>
        <CssBaseline />
        <Routes />
      </Theme>
    </AuthContextProvider>
  );
}

export default App;
