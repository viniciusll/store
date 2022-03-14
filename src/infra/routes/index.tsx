import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Home } from "../../presetion/pages/home";
import { Products } from "../../presetion/pages/products";
import { Cart } from "../../presetion/pages/cart";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
};