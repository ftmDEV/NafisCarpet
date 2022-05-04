import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import "./assets/styles/style.css"
import NotFound from "./pages/404";
import Detail from "./pages/detail";
import LandingPage from "./pages/landing";
import Store from "./pages/store";
import {ThemeProvider } from "@mui/material/styles"
import {globalTheme} from "./utils/theme"
import Navbar from "./components/navbar";
import Basket from "./pages/basket";
function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/basket" element={<Basket/>}></Route>
          <Route path="/detail/:id" element={<Detail/>}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route exact path="/" element={<LandingPage/>}></Route>
          <Route element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
