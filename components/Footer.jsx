import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
  return (
     <footer className="bottom-0">
      <div className="m-auto w-full">
        <div className="flex gap-2 justify-stretch">
          2023 Created By <GoMarkGithub className="flex" />{" "}
          <a href="https://github.com/goldet" target="blank">
            Golde Tischler
          </a> and 
          <a href="https://github.com/DanNisenson" target="blank">
            Dan Nisenson
          </a>
        </div>
     </div>
     </footer> 
  );
};

export default Footer;
