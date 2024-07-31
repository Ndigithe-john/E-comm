import PropTypes from "prop-types";
import {
  ShoppingCartIcon,
  TagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import MobileSearchBar from "./MobileSearchBar";
import MenuItemMobile from "./MenuItemMobile";

const MobileMenu = ({ setIsOpen }) => {
  return (
    <nav className="block sm:hidden relative z-10 w-full overflow-y-auto bg-white sm:max-w-sm">
      <MobileSearchBar />
      <div className="h-2" />
      <div>
        <MenuItemMobile
          closeMenu={setIsOpen}
          url="/categories"
          label="Category"
          icon={TagIcon}
        />
        <MenuItemMobile
          closeMenu={setIsOpen}
          url="/cart"
          label="cart"
          icon={ShoppingCartIcon}
        />
        <MenuItemMobile
          closeMenu={setIsOpen}
          url="/login"
          label="Login"
          icon={UserCircleIcon}
        />
      </div>
    </nav>
  );
};
MobileMenu.propTypes = {
  setIsOpen: PropTypes.func,
};
export default MobileMenu;
