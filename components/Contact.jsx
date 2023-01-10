const Contact = () => {

  return (
    <div>
    <div className="pt-20 flex flex-col items-center md:flex md:flex-col md:items-start lg:flex lg:flex-col lg:items-start " > {/* //align items */}
      <h1 className="text-2xl underline mb-5 text-center lg:text-left lg:pt-10">Contact me</h1>

      <ul>
        <li className="flex gap-1"> 
          <a className="hover:underline" href="https://mail.google.com/mail/?view=cm&fs=1&to=ben.schroeder100@gmail.com&su=SUBJECT&body=BODY" target="blank">Email: </a>
          <h3>ben.schroeder100@gmail.com</h3>
        </li>

        <li className="pt-2">
          <a className="hover:underline" href="https://twitter.com/bschroederpoet" target="blank">Twitter @bschroederpoet</a>
        </li>

        <li className="pt-2"> 
          <a className="hover:underline" href="https://www.linkedin.com/in/ben-schroeder-766bb6122/" target="blank">Linkedin</a>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Contact;

