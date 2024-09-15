import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/Home/HomePage";
import ProductsPage from "./Pages/ProductsPage";
// import ProductPage from "./pages/ProductPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/products" Component={ProductsPage} />
                {/* <Route path="/product/:id" component={ProductPage} /> */}
            </Routes>
        </Router>
    );
}

export default App;
