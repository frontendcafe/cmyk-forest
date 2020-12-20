import Link from "next/link";

const Navbar = ({ className }) => {
  return (
    <>
      <nav>
        <ul className="space-x-10 mr-4 mt-2 flex justify-end">
          <li className="inline cursor-pointer font-bold">
            <Link href="/" className={className}>
              Register
            </Link>
          </li>
          <li className="inline cursor-pointer font-bold">
            <Link href="https://frontend.cafe/" className={className}>
              FrontEnd Café
            </Link>
          </li>
          <li className="inline cursor-pointer font-bold">
            <Link href="/faq" className={className}>
              F.A.Q
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
