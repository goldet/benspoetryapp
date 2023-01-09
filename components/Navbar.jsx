import Link from 'next/link'

const Navbar = () => {
  return <div>
    <h2>Ben Schroeder</h2>

    <ul>
        <li>
            <Link href="/">Home</Link>
        </li>

        <li>
            <Link href="/work/poetry">Poetry</Link>
        </li>

        <li>
            <Link href="/work/essays">Essays</Link>
        </li>

        <li>
            <Link href="/about/bio">Bio</Link>
        </li>

        <li>
            <Link href="/about/cv">CV</Link>
        </li>
        
        <li>
            <Link href="/contact">Contact</Link>
        </li>

    </ul>
  </div>;
};

export default Navbar;
