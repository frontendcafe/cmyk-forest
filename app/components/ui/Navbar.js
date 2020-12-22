import Link from "next/link";

const Navbar = ({ className }) => {
  return (
    <>
      <nav>
        <ul className="space-x-10 mr-12 mt-2 flex justify-end">
          <li className="inline cursor-pointer font-bold">
            <Link href="/">
              <a className={className}>Register</a>
            </Link>
          </li>
          <li className="inline cursor-pointer font-bold">
            <Link href="https://frontend.cafe/">
              <a className={className}>FrontEnd Café</a>
            </Link>
          </li>
          <li className="inline cursor-pointer font-bold">
            <Link href="/faq">
              <a className={className}>F.A.Q</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
