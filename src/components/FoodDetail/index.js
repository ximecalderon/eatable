import Button from '../button';

const FoodDetail = ({ product, handleAddProduct }) => (
    <div
        style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
        }}
    >
        <img
            src={product.picture_url}
            alt={product.name}
            style={{
                height: 250,
                width: 250,
                borderRadius: '50%',
            }}
        />
        <div>
            <div style={{ textAlign: 'center' }}>
                <h2>{product.name}</h2>
                <p>$ {product.price}</p>
            </div>

            <div>
                <h3>Description</h3>
                <p>{product.description}</p>
            </div>
        </div>
        <Button style={{ width: '100%' }} onClick={handleAddProduct}>
            Add to cart
        </Button>
    </div>
);

export default FoodDetail;
