import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <Link href="/">
        <a>Register</a>
      </Link>
      <Link href="/frontendcafe">
        <a>FrontEnd Café</a>
      </Link>
      <Link href="/faq">
        <a>FAQ</a>
      </Link>
    </>
  );
};

export default Navbar;
