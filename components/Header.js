export default function Header() {
  return (
    <header className="relative flex justify-center items-center py-3 bg-[#394867] text-white">
      <a href="/" className="text-xl font-bold">Graduate Work</a>
      <a href="/about" className=" absolute end-12 text-gray-300 hover:text-white">About</a>
    </header>
  );
}
