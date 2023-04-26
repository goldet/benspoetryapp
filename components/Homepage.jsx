import Image from 'next/image';
import benseated from 'public/benseated.jpg';
import { useRef } from 'react';

export default function Homepage({ isWide }) {
  const about = useRef(null);

  const scroll = () => about.current.scrollIntoView();

  return (
    <>
      {isWide ? (
        <div className="flex flex-col pt-8 md:items-start md:px-[20vw] lg:px-0">
          <div className="hero relative grid w-full justify-between">
            <div>
              <h1 className="ml-[-1vw] flex flex-col items-center text-8xl leading-[0.6] tracking-[-8px] md:text-[250px] md:leading-[0.6] md:tracking-[-20px] lg:pt-8">
                Ben <br /> Schroeder
              </h1>
              <h2 className="pt-4 text-5xl text-[#000000ba] md:pt-8">Poet</h2>
            </div>

            {/* arrow */}
            <div
              className="absolute bottom-14 h-10 w-14 cursor-pointer self-end justify-self-center"
              onClick={scroll}>
              <div className="absolute bottom-4 flex ">
                <div className=" mr-[-5px] w-8 rotate-45 border-b-2 border-solid border-[#00000080]"></div>
                <div className=" ml-[-5px] w-8 -rotate-45 border-b-2 border-solid border-[#00000080]"></div>
              </div>
            </div>
          </div>

          <div ref={about} className="grid justify-center pt-8 pb-16 text-justify">
            <Image
              className="mx-auto rounded-md"
              src={benseated}
              alt="image of Ben Schroeder"
              width="350"
              height="350"
            />
            <p className="px-32 py-16 text-xl">
              Ben Schroeder is a poet from Belgium—not the country but the small town in Wisconsin.
              He currently lives in Madrid, Spain, where he works as an English teacher. His work
              frequently examines instances of reflection, refraction, and relation, often with a
              focus on the everyday.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col pt-4 md:items-start md:px-[20vw] lg:px-0">
          <div className="relative grid w-full justify-between">
            <div>
              <h1 className="ml-[-1vw] flex flex-col items-center text-8xl leading-[0.6] tracking-[-8px] md:text-[250px] md:leading-[0.6] md:tracking-[-20px] lg:pt-8">
                Ben <br /> Schroeder
              </h1>
              <h2 className="pt-4 text-5xl text-[#000000ba] md:pt-8">Poet</h2>
            </div>
            <div className="align-center my-8 flex h-80 overflow-hidden rounded-md">
              <Image
                className="h-fit self-center"
                src={benseated}
                alt="image of Ben Schroeder"
                width="400"
                height="400"
                priority
              />
            </div>
          </div>

          <div className="grid justify-center pb-16 pt-6 text-justify">
            <p className="text-xl">
              Ben Schroeder is a poet from Belgium—not the country but the small town in Wisconsin.
              He currently lives in Madrid, Spain, where he works as an English teacher. His work
              frequently examines instances of reflection, refraction, and relation, often with a
              focus on the everyday.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
