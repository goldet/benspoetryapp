const Contact = () => {
  return (
    <div className="flex flex-col pt-8 md:flex md:flex-col md:items-start md:px-[10vw] lg:flex lg:flex-col lg:items-start lg:px-0">
      <h1 className="mb-5 text-6xl decoration-4 lg:pt-10 lg:text-left">Contact</h1>
      <ul className="pt-[2vh] text-lg">
        <li className="flex gap-1">
          <a
            className="hover:underline"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ben.schroeder100@gmail.com&su=SUBJECT&body=BODY"
            target="blank">
            Email:
          </a>
          <h3>ben.schroeder100@gmail.com</h3>
        </li>

        <li className="pt-2">
          <a className="hover:underline" href="https://twitter.com/bschroederpoet" target="blank">
            Twitter @bschroederpoet
          </a>
        </li>

        <li className="pt-2">
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/ben-schroeder-766bb6122/"
            target="blank">
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
