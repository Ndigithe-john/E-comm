import PropTypes from "prop-types";

import { Bars3Icon } from "@heroicons/react/24/outline";

const MobileMenuIcon = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className="block: sm:hidden"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <Bars3Icon className="h-5 w-6 text-slate-900" />
    </button>
  );
};

MobileMenuIcon.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default MobileMenuIcon;
