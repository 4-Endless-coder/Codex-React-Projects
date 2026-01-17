const Navbar = () => {
  return (
    <div className="mb-6 flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 p-4 shadow-lg">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
        <img src="/firebase.svg" alt="Firebase" className="h-6 w-6" />
      </div>
      <h1 className="text-2xl font-bold text-white">Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;