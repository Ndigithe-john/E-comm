import {
  TagIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import MenuItem from "./MenuItem";

const DesktopMenu = () => {
  return (
    <nav className="hidden items-center sm:ml-6 sm:flex sm:space-x-8">
      <MenuItem url="/categories" icon={TagIcon} label="Categories" />
      <MenuItem url="/login" icon={UserCircleIcon} label="Login" />
      <MenuItem url="/cart" icon={ShoppingCartIcon} label="Cart" />
    </nav>
  );
};

export default DesktopMenu;
