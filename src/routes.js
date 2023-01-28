import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import ProductComponent from "./components/ProductComponent";
import Header from './components/Header';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />            
            <Routes>
                <Route path='/' element={<ProductListing />} />
                <Route path='/product/:productId' element={<ProductDetail />} />                             
            </Routes>
        </BrowserRouter>
    )
}

