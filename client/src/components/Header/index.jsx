function Header() {
  return (
    <header className="fixed w-full border-b bg-white">
      <div className="mx-auto max-w-7xl bg-red-500 sm:px-6 lg:px-8">
        <div className="flex h-14 w-full items-center sm:h-16 justify-between">
          <div className="flex items-center justify-between gap-10">
            <a href="/">John Store</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
