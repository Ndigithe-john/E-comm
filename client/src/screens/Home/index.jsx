import Axios from 'axios';
import { useState, useEffect } from 'react';

import ProductCard from '@components/ProductCard';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await Axios.get('/api/v1/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <section className='bg-white'>
      <div className='mx-w-7xl mx-auto px-3 py-10 sm:px-6 lg:px-8'>
        <h1 className='text-2xl font-bold text-slate-900'>Latest Products</h1>

        <div className='mg:grid-cols-3 mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
