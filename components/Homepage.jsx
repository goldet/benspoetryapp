import Image from "next/image";
import benphoto2 from "../public/benphoto2.jpg";

export default function Homepage() {
  return (
    <>
      <div className="pt-8 flex flex-col md:items-start md:px-[20vw] lg:px-0 lg:flex-row lg:justify-between">
        <div className="lg:flex lg:flex-col">
          <h1 className="flex flex-col items-center ml-[-1vw] text-8xl leading-[0.6] tracking-[-8px] md:tracking-[-20px] md:leading-[0.6] md:text-[250px] lg:pt-8">
            Ben <br /> Schroeder
          </h1>
          <h2 className="text-5xl grey-text pt-4 md:pt-8">Little Poet</h2>
        </div>

        <div className="lg:flex lg:flex-row pt-8">
          {/* <Image
            className="rounded-md"
            src={benphoto2}
            alt="image of Ben Schroeder"
            width="300px"
            height="300px"
          /> */}
        </div>
      </div>
    </>
  );
}
