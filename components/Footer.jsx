import { GoMarkGithub } from 'react-icons/go';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 pl-8 pb-2 text-slate-600">
      <div className="m-auto flex w-full justify-center text-xs md:justify-start">
        <div className="md:justify-stretch flex gap-2">
          2023 Created By <GoMarkGithub size={12} />
          <a href="https://github.com/goldet" target="blank">
            Golde Tischler
          </a>
          and
          <a href="https://github.com/DanNisenson" target="blank">
            Dan Nisenson
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /*  linkedin option */
}
/* import { AiFillLinkedin } from "react-icons/ai";
<div className="flex gap-2 justify-stretch">
2023 Created By <AiFillLinkedin className="flex " />{" "}
<a href="https://www.linkedin.com/in/golde-tischler/" target="blank">
  Golde Tischler
</a> and 
<a href="https://www.linkedin.com/in/dan-nisenson/" target="blank">
  Dan Nisenson
</a>
</div> */
