import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function AuthenticatedApp() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/products/:id' element={<ProductDetail />} />
                <Route path='/history' element={<div>History</div>} />
                <Route path='/profile' element={<div>Profile</div>} />
            </Route>
        </Routes>
    );
}

export default AuthenticatedApp;
