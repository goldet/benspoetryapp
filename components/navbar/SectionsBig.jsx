import Link from "next/link";

const SectionsBig = ({ setDropdown }) => {
  return (
    <>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <button onClick={() => setDropdown("work")}>Work</button>
        </li>

        <li>
          <button onClick={() => setDropdown("about")}>About </button>
        </li>

        <li>
          <Link href="/contact"> Contact</Link>
        </li>
    </>
  );
};

export default SectionsBig;
