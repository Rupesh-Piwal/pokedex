const Header = () => {
  return (
    <header className="pt-3 px-1 mb-3 sticky top-0 left-0 z-10">
      <div className="flex items-center justify-between gap-2  w-full bg-[rgba(255, 255, 255, 0.9)] backdrop-blur-3xl border p-5 rounded-md border-gray-300">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Pokedex</h1>
        </div>
        {/* PAGINATION  */}
      </div>
    </header>
  );
};

export default Header;
