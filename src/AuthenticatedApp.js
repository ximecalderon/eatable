import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { useEffect, useState } from 'react';
import { ProductsProvider } from './context/products-context';

function AuthenticatedApp() {
    return (
        <ProductsProvider>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/products/:id' element={<ProductDetail />} />
                    <Route path='/history' element={<div>History</div>} />
                    <Route path='/profile' element={<div>Profile</div>} />
                </Route>
            </Routes>
        </ProductsProvider>
    );
}

export default AuthenticatedApp;
