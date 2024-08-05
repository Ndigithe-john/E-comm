import PropTypes from 'prop-types';

import CardImage from './CardImage';
import Rating from './Rating';
const ProductCard = ({ product }) => {
  return (
    <a href={`/product/${product._id}`}>
      <CardImage image={product.image} name={product.image} />
      <div className='mt-2 flex justify-between gap-4'>
        <h4 className='text-sm font-semibold uppercase tracking-wide text-slate-900'>
          {product.name}
        </h4>
        <p className='text-sm font-semibold text-slate-900'>
          Ksh.{product.price}
        </p>
      </div>
      <Rating value={product.rating} />
    </a>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object,
};
export default ProductCard;
