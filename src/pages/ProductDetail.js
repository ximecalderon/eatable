import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProduct } from '../services/product-service';
import FoodDetail from '../components/FoodDetail';

const ProductDetail = ({ navigation }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const handleAddProduct = () => {
        navigate('/');
    };
    useEffect(() => {
        getProduct(id).then(setProduct);
    }, [id]);

    return <FoodDetail product={product} handleAddProduct={handleAddProduct} />;
};

export default ProductDetail;
