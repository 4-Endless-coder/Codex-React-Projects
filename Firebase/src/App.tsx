import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";

const App = () => {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4">
  <Navbar />

  <div className="mt-6 flex items-center gap-3">
    {/* Search Input */}
    <div className="relative flex flex-1 items-center">
      <FiSearch className="absolute left-3 text-xl text-gray-400" />

      <input
        type="text"
        placeholder="Search..."
        className="
          h-11 w-full
          rounded-md
          border border-white/20
          bg-transparent
          px-3 pl-10
          text-white
          placeholder:text-gray-400
          focus:border-white
          focus:outline-none
        "
      />
    </div>
    
    <button
      className="
        flex h-11 w-11 items-center justify-center
        rounded-md
        border border-white/20
        text-white
        hover:bg-white/10
        transition
      "
    >
      <FaCirclePlus className="text-2xl" />
    </button>
  </div>
</div>

    </>
  );
};

export default App;
