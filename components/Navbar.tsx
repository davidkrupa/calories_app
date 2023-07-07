import Link from "next/link";

const Navbar = () => {
  return (
    <header className="max-w-7xl">
      <nav className="flex px-6 py-4 gap-4">
        <Link href="/">Logo here</Link>
        <Link href="#activities">Activities</Link>
      </nav>
    </header>
  );
};

export default Navbar;
