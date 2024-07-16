import { number } from 'prop-types';
import { useState, usedEffect } from 'react';
import Axios from 'axios';

const ProductList = ({ orderId }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };
        
        if (orderId) {
            fetchProducts();
        }
        // if (orderId) {
        //    const fetchedProducts = [
        //        { id: 'A123', name: 'Coffee' },
        //        { id: 'B456', name: 'Croissant' },
        //    ]; 
        //    setProducts(fetchedProducts); 
    }, [orderId]);
    

    return (
        <div className='product-list'>
            <h3>Products</h3>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} (ID: {prodict.od})
                    </li>
                ))}
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    orderId: number
}

export default ProductList;