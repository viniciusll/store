import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import { Home } from "../../presetion/pages/Home";
import { Products } from "../../presetion/pages/Products";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/products" element={<Products />} />
            </Routes>
        </Router>
    );
};