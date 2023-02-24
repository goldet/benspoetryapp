import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bottom-0">
      <div className="m-auto w-full">
        <div className="justify-stretch flex gap-2">
          2023 Created By <GoMarkGithub className="flex" />{" "}
          <a href="https://github.com/goldet" target="blank">
            Golde Tischler
          </a>{" "}
          and
          <a href="https://github.com/DanNisenson" target="blank">
            Dan Nisenson
          </a>
        </div>

        {/*  linkedin option */}

        {/* <div className="justify-stretch flex gap-2">
          2023 Created By <AiFillLinkedin className="flex " />{" "}
          <a href="https://www.linkedin.com/in/golde-tischler/" target="blank">
            Golde Tischler
          </a>{" "}
          and
          <a href="https://www.linkedin.com/in/dan-nisenson/" target="blank">
            Dan Nisenson
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
