import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../services/productService';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const res = await getProducts()
            setProducts(res.data.data)
        
        } catch (error) {
            console.error("Error fetching products", error)
        
        } finally {
            setLoading(false)
        }
    }

    fetchProducts()
    }, []);

    if(loading) return <p>Loading product list...</p>

    return (
        <div className="grid grid-cols-3 gap-6 p-6">
            {products.map(product => (
                <div key={product._id} className="border p-4 rounded shadow">
                    <h2 className="text-lg font-bold">{product.name}</h2>
                    <p>{product.description}</p>
                    <p>₹{product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;