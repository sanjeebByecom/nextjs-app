import Link from "next/link";

const Header = () => {
  return <>
      <Link href="/">
          <a>Home</a>
      </Link>
      <Link href="/About">
          <a>About</a>
      </Link>
      <Link href="/Contact">
          <a>Contact</a>
      </Link>
  </>;
};

export default Header;
