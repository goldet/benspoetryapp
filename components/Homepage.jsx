import Image from "next/image";
import benseated from "../public/benseated.jpg";


export default function Homepage() {
  return (
    <>
      <div className="flex flex-col pt-8 md:items-start md:px-[20vw] lg:px-0">
        <div className="hero relative grid justify-between">
          <div>
            <h1 className="ml-[-1vw] flex flex-col items-center text-8xl leading-[0.6] tracking-[-8px] md:text-[250px] md:leading-[0.6] md:tracking-[-20px] lg:pt-8">
              Ben <br /> Schroeder
            </h1>
            <h2 className="pt-4 text-5xl text-[#000000ba] md:pt-8">
             Poet
            </h2>
          </div>
          <div className="absolute bottom-20 flex self-end justify-self-center">
            <div className=" mr-[-5px] w-8 rotate-45 border-b-2 border-solid border-[#00000080]"></div>
            <div className=" ml-[-5px] w-8 -rotate-45 border-b-2 border-solid border-[#00000080]"></div>
          </div>
        </div>

        <div className="grid justify-center text-justify pt-8 pb-20 lg:h-[65vh] ">
          <Image
            className="mx-auto rounded-md "
            src={benseated}
            alt="image of Ben Schroeder"
            width="400"
            height="400"
          />
          <p className="text-lg pt-7 pb-16">
            Ben Schroeder is a poet from Belgium—not the country but the small
            town in Wisconsin. He currently lives in Madrid, Spain, where he
            works as an English teacher. His work frequently examines instances
            of reflection, refraction, and relation, often with a focus on the
            everyday.
          </p>
        </div>
      </div>

     
    </>
  );
}
