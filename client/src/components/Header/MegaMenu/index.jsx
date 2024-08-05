import { useState, useRef, useEffect } from 'react';

import AllCategoriesMenuDisplay from './AllCategoriesMenuDisplay';
import MegaMenuItem from './MegaMenuItem';
import MenMegaMenuDisplay from './MenMegaMenuDisplay';

const menus = {
  'All Categories': AllCategoriesMenuDisplay,
  Men: MenMegaMenuDisplay,
};

const MegaMenu = () => {
  const [currentMenu, setCurrentMenu] = useState(null);
  const menuRef = useRef();
  const CurrentMenuComponent = currentMenu ? menus[currentMenu] : null;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setCurrentMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className='border-t'>
      <nav className='hidded relative mx-auto max-w-7xl gap-10 bg-white px-3 py-3 sm:px-6 lg:flex lg:px-8'>
        <MegaMenuItem
          label='All Categories'
          action={setCurrentMenu}
          currentItem={currentMenu}
        />
        <MegaMenuItem
          label='Men'
          action={setCurrentMenu}
          currentItem={currentMenu}
        />
        <MegaMenuItem
          label='Women'
          action={setCurrentMenu}
          currentItem={currentMenu}
        />
        <MegaMenuItem
          label='Kids'
          action={setCurrentMenu}
          currentItem={currentMenu}
        />
        <MegaMenuItem
          label='Collections'
          action={setCurrentMenu}
          currentItem={currentMenu}
        />
        <MegaMenuItem
          label='Watches'
          action={setCurrentMenu}
          currentItem={currentMenu}
        />
        <MegaMenuItem
          label='Shoes'
          action={setCurrentMenu}
          currentItem={currentMenu}
        />
        <MegaMenuItem
          label='Accessories'
          action={setCurrentMenu}
          currentItem={currentMenu}
        />
        <MegaMenuItem
          label='Laptops'
          action={setCurrentMenu}
          currentItem={currentMenu}
        />
      </nav>
      <div
        ref={menuRef}
        className={`transform transition-all duration-500 ease-in-out ${currentMenu ? 'opacity:100 max-h-screen' : 'max-h-0 opacity-0'} overflow-hidden`}>
        {CurrentMenuComponent && <CurrentMenuComponent />}
      </div>
    </div>
  );
};

export default MegaMenu;
