import { useState } from "react";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import DesktopMenu from "./DesktopMenu";
import MobileMenuIcon from "./MobileMenuIcon";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed w-full border-b bg-white">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex h-14 w-full items-center sm:h-16 justify-between">
          <div className="flex flex-1 items-center justify-between gap-10">
            <Logo />
            <SearchBar />
            <DesktopMenu />
            <MobileMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
      <div>{isOpen && <MobileMenu setIsOpen={setIsOpen} />}</div>
    </header>
  );
}

export default Header;
