import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryImageBox = ({ url, imageUrl, label, height = 'h-64' }) => {
  return (
    <div>
      <Link to={url} className='relative block overflow-hidden rounded-xl'>
        <span className='absolute bottom-10 left-1/2 z-10 block -translate-x-1/2 rounded-lg bg-white px-3 py-2 text-center text-sm font-semibold uppercase tracking-wide'>
          {label}
        </span>
        <img
          src={imageUrl}
          alt={label}
          className={` ${height} w-full transform rounded-xl object-cover object-top transition-transform duration-500 hover:scale-105`}
        />
      </Link>
    </div>
  );
};
CategoryImageBox.propTypes = {
  url: PropTypes.string,
  imageUrl: PropTypes.string,
  label: PropTypes.string,
  height: PropTypes.string,
};
export default CategoryImageBox;
