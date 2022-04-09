import Button from '../button';
import { Container, Image, Product, Price } from './styles';

const FoodDetail = ({ product, handleAddProduct }) => (
    <Container>
        <Image src={product.picture_url} alt={product.name} />
        <div>
            <div style={{ textAlign: 'center' }}>
                <Product>{product.name}</Product>
                <Price>$ {product.price}</Price>
            </div>

            <div>
                <h3>Description</h3>
                <p>{product.description}</p>
            </div>
        </div>
        <Button
            style={{ width: '100%', marginTop: 0 }}
            onClick={handleAddProduct}
        >
            Add to cart
        </Button>
    </Container>
);

export default FoodDetail;
