import Link from "next/link";
import Container from "../Container";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="dark:bg-sage-600">
      <Container>
        <div
          className="
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        px-4
                        py-4
                        "
        >
          <Logo />
          <ol className="hidden md:flex items-center gap-8 dark:text-white">
            <li>
              <Link href="#about" scroll={false}>
                <span className="text-sage-100 font-mono">01.</span> About
              </Link>
            </li>
            <li>
              <span className="text-sage-100 font-mono">02.</span> Projects
            </li>
            <li className="border border-white rounded-full px-6 py-3">
              <span className="text-sage-100 font-mono">03.</span> Contact
            </li>
          </ol>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
