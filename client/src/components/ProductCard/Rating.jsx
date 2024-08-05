import PropTypes from 'prop-types';
import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';

const Rating = ({ value }) => {
  const getStars = (value) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (value >= i) {
        stars.push(<IoStar key={1} className='w-3.5 text-indigo-500' />);
      } else if (value >= i - 0.5) {
        stars.push(<IoStarHalf key={1} className='w-3.5 text-indigo-500' />);
      } else {
        stars.push(<IoStarOutline key={1} className='w-3.5 text-indigo-500' />);
      }
    }
    return stars;
  };

  return (
    <div className='mt-0.1 flex items-center'>
      {getStars(value)}
      <span className='ml-2 text-sm font-semibold text-slate-600'>{value}</span>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number,
};

export default Rating;
