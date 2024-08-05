import PropTypes from 'prop-types';
import { EyeIcon } from '@heroicons/react/24/outline';
const CardImage = ({ image, name }) => {
  return (
    <div className='relative inline-block w-full'>
      <img
        src={image}
        alt={name}
        className='block w-full rounded-lg object-cover object-center sm:h-96'
      />
      <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 hover:opacity-100'>
        <div className='flex'>
          <div className='transtion-all rounded-full bg-white p-3 hover:bg-slate-200'>
            <EyeIcon className='h-6 w-6 text-slate-900' strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
};
CardImage.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default CardImage;
