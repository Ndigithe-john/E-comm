import ProductCard from '@components/ProductCard';
import { useGetProductsQuery } from '@slices/productApiSlice';
import Loader from '@components/Loader';

const HomeScreen = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();

  return (
    <section className='bg-white'>
      <div className='mx-w-7xl mx-auto px-3 py-10 sm:px-6 lg:px-8'>
        <h1 className='text-2xl font-bold text-slate-900'>Latest Products</h1>

        {isLoading ? (
          <Loader />
        ) : isError ? (
          <p>{error.data.message || error.message}</p>
        ) : (
          <div className='mg:grid-cols-3 mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeScreen;
