import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MenuItemMobile = ({ url, label, icon: Icon, closeMenu }) => {
  return (
    <Link
      to={url}
      onClick={() => closeMenu(false)}
      className="block w-full px-4 py-2 text-sm font-medium text-slate-900 transition-all hover:bg-slate-200 hover:text-indigo-700"
    >
      <span className="flex items-center gap-1">
        <Icon className="h-4 w-4" strokeWidth={2} />
        {label}
      </span>
    </Link>
  );
};

MenuItemMobile.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.elementType,
  closeMenu: PropTypes.func,
};

export default MenuItemMobile;
