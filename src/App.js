import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/style.css";
import NotFound from "./pages/404";
import Detail from "./pages/detail";
import LandingPage from "./pages/landing";
import Store from "./pages/store";
import { ThemeProvider } from "@mui/material/styles";
import { globalTheme } from "./utils/theme";
import Basket from "./pages/basket";
import ProductProvider from "./context/context";
import WishList from "./pages/wish_list/wish_list";
import Login from "./pages/account/login/Login";
import Register from "./pages/account/register/Register";
import AdminPanel from "./pages/adminPanel/AdminPanel";

function App() {
  return (
    <ProductProvider>
      <ThemeProvider theme={globalTheme}>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="admin_panel" element={<AdminPanel />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detail" element={<Detail />}></Route>
            <Route path="wish_list" element={<WishList />}></Route>
            <Route path="/basket" element={<Basket />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="/store" element={<Store />}></Route>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route element={<NotFound />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </ProductProvider>
  );
}

export default App;
