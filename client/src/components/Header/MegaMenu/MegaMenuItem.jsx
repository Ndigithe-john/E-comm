import PropTypes from 'prop-types';

const MegaMenuItem = ({ label, action, currentItem }) => {
  return (
    <button
      className={`text-sm font-medium text-slate-700 hover:text-slate-900 ${currentItem === label && 'font-bold text-indigo-700 underline underline-offset-4'}`}
      onClick={() => {
        if (currentItem !== label) {
          action(label);
        } else {
          action(null);
        }
      }}>
      {label}
    </button>
  );
};

MegaMenuItem.propTypes = {
  label: PropTypes.string,
  currentItem: PropTypes.string,
  action: PropTypes.func,
};

export default MegaMenuItem;
