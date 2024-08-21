import {
  TagIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';

import MenuItem from './MenuItem';

const DesktopMenu = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav className='hidden items-center sm:ml-6 sm:flex sm:space-x-8'>
      <MenuItem url='/categories' icon={TagIcon} label='Categories' />
      <MenuItem url='/login' icon={UserCircleIcon} label='Login' />
      <div className='flex items-center gap-2'>
        <MenuItem url='/cart' icon={ShoppingCartIcon} label='Cart' />
        <span className='min-w-5 rounded-full bg-indigo-700 text-center text-sm font-semibold text-white'>
          {cartItems.length}
        </span>
      </div>
    </nav>
  );
};

export default DesktopMenu;
