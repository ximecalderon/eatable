import HomePage from './pages/HomePage';
import CartPage from "./pages/cart-page";
import ProductDetail from './pages/ProductDetail';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ProductsProvider } from './context/products-context';

const Data = [
    {
        id: 1,
        name: "green cream",
        price: 3313,
        category: "soups",
        description:
            "Eveniet distinctio exercitationem. Error sed ea. Aut id eius. Atque quia enim. Est asperiores architecto. Magnam perferendis labore. Tenetur animi blanditiis. Porro nesciunt expedita. Et rem et. Eveniet quo et. Vel aliquid sit. Et consequu.",
        picture_url:
            "https://img.freepik.com/free-photo/top-view-green-cream-soups_23-2148519096.jpg",
    },
    {
        id: 2,
        name: "organic pumpkin",
        price: 4189,
        category: "soups",
        description:
            "Distinctio ea itaque. Sint in inventore. Distinctio consequatur repudiandae. Molestias laudantium et. Voluptatibus animi atque. Non autem aut. Modi quidem voluptas. Rerum adipisci molestiae. Consequuntur in et. Nam doloremque tempore. Dist.",
        picture_url:
            "https://img.freepik.com/free-photo/organic-pumpkin-puree-white-bowl_193819-1820.jpg",
    },
    {
        id: 3,
        name: "broccoli soup",
        price: 2344,
        category: "soups",
        description:
            "Omnis adipisci magnam. Sint qui voluptas. Harum ut qui. Aliquid delectus numquam. Nihil voluptate quaerat. Odit fugiat animi. Voluptatem fugiat harum. Incidunt dolorem eius. Ut architecto deserunt. Enim et id. Quisquam ipsam sunt. Qui modi.",
        picture_url:
            "https://img.freepik.com/free-photo/flat-lay-homemade-soup-broccoli-spinach_23-2148452773.jpg",
    },
    {
        id: 8,
        name: "barquita taco",
        price: 2506,
        category: "mexican",
        description:
            "Veniam accusamus adipisci. Aut libero quia. Quos omnis omnis. Est et officia. Iusto nihil sint. Suscipit perferendis ut. Quo est dolorem. Et culpa eligendi. Consequuntur possimus aliquam. Qui quod voluptas. Laboriosam culpa quaerat. Offici.",
        picture_url:
            "https://img.freepik.com/free-photo/mexican-barquita-taco-with-beef-chilli-tomato-onion-spices-wooden-table_123827-15005.jpg",
    },
];

function AuthenticatedApp() {
    return (
        <ProductsProvider>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/products/:id' element={<ProductDetail />} />
                    <Route path='/history' element={<div>History</div>} />
                    <Route path='/profile' element={<div>Profile</div>} />
                    <Route path="/cart" element={<CartPage products={Data} />} />
                </Route>
            </Routes>
        </ProductsProvider>
    );
}


export default AuthenticatedApp;
