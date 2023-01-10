import Link from "next/link";

const DropdownMenu = ({ name, slugs }) => {

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <div className="border-2 absolute bg-white w-full ">
      <ul>
        {slugs.map((slug) => (
          <li key={slug}>
            <Link href={`/${name}/${slug}`}>
              {capitalizeFirstLetter(slug)}
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
