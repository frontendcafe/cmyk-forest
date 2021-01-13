import Link from "next/link";

const Navbar = ({ className }) => {
  return (
    <ul className="mt-2 flex justify-end">
      <li className="inline cursor-pointer font-bold">
        <Link href="/">
          <a className={className}>Register</a>
        </Link>
      </li>
      <li className="inline cursor-pointer font-bold">
        <Link href="https://frontend.cafe/">
          <a className={className}>FrontEndCafé</a>
        </Link>
      </li>
      <li className="inline cursor-pointer font-bold">
        <Link href="/faq">
          <a className={className}>F.A.Q</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
