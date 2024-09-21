import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/Home/HomePage";
import SeatingProductsPage from "./Pages/SeatingProductsPage";
import ProductPage from "./Pages/ProductPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/SeatingProductsPage"
                    element={<SeatingProductsPage />}
                />
                <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
        </Router>
    );
}

export default App;
