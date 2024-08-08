import { useState, useEffect } from 'react';
import Axios from 'axios';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Rating from '@components/ProductCard/Rating';
import QuantitySelector from './QuantitySelector';

const ProductDetailsScreen = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await Axios.get(`/api/v1/products/${productID}`);
      setProduct(data);
    };
    getProduct();
  }, [productID]);
  // const product = products.find((product) => product._id === productID);

  return (
    <div className='bg-white py-6 pb-16 sm:pb-24'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <Link
          to='/'
          className='mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-all hover:text-slate-700'>
          <ArrowUturnLeftIcon className='h-3.5 w-3.5' /> Back
        </Link>

        <div className='lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8'>
          <div className='mt-8 lg:col-span-7 lg:mt-0'>
            <h2 className='sr-only'>Product Image</h2>
            <img
              className='rounded-lg'
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className='lg:cols-start-8 lg:col-span-5'>
            <h6 className='inline-block rounded-full border border-slate-300 px-3 py-0.5 text-xs font-medium text-slate-500'>
              {product.category}
            </h6>
            <h6 className='mt-8 text-sm font-semibold text-indigo-700'>
              {product.brand}
            </h6>
            <div className='mt-1 flex justify-between'>
              <h1 className='text-2xl font-medium text-slate-900'>
                {product.name}
              </h1>
              <p className='text-sm font-semibold text-slate-900'>
                Ksh. {product.price}
              </p>
            </div>

            <div className='my-1 flex items-center gap-0'>
              <Rating value={product.rating} />
              <span className='ml-8 mt-0.5 text-sm font-semibold text-slate-700'>
                {product.numReviews} Reviews
              </span>
            </div>
            {/* Description */}
            <div className='mt-1o'>
              <div className='mt-4 text-slate-400'>{product.description}</div>
            </div>
            <QuantitySelector countInStock={product.countInStock} />
            {/* Add to cart */}
            <button className='justify-content mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white transition-all hover:bg-indigo-700'>
              Add to cart
            </button>
            {/* content */}
            <div className='mt-10 border-t border-gray-200 pt-8'>
              <h2 className='text-sm font-medium text-slate-500'>
                Description
              </h2>
              <div className='prose prose-sm prose-stone mt-4 text-slate-500'>
                <ReactMarkdown>{product.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsScreen;
