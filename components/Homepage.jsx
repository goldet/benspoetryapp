import Image from "next/image";
import benphoto2 from "../public/benphoto2.jpg";

export default function Homepage() {
  return (
    <>
      <div className="flex flex-col pt-8 md:items-start md:px-[20vw] lg:px-0">
        <div className="hero relative justify-between grid">
          <div>
            <h1 className="ml-[-1vw] flex flex-col items-center text-8xl leading-[0.6] tracking-[-8px] md:text-[250px] md:leading-[0.6] md:tracking-[-20px] lg:pt-8">
              Ben <br /> Schroeder
            </h1>
            <h2 className="text-[#000000ba] pt-4 text-5xl md:pt-8">Little Poet</h2>
            </div>
          <div className="absolute bottom-20 self-end justify-self-center flex">
            <div className=" w-8 mr-[-5px] rotate-45 border-b-2 border-solid border-[#00000080]"></div>
            <div className=" w-8 ml-[-5px] -rotate-45 border-b-2 border-solid border-[#00000080]"></div>
          </div>
        </div>

        <div className="lg:h-[65vh] grid justify-center pt-8 pb-20">
          <Image
            className="mx-auto rounded-md"
            src={benphoto2}
            alt="image of Ben Schroeder"
            width="300"
            height="300"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              vitae, magnam cum nemo, atque consequatur autem eius dolorem
              quisquam eum commodi impedit modi fuga delectus iste cumque. Id,
              dolorem ea. Nulla recusandae ut, placeat similique quisquam sint
              perferendis aperiam error deleniti velit, quam rerum ipsa atque
              omnis eveniet quod porro sapiente dolores id quas. Labore suscipit
              quibusdam dolores officia quisquam. Officiis vero voluptatibus hic
              omnis provident aut ad! Laboriosam sapiente similique expedita
              tempore quod iusto numquam culpa! Doloremque rerum porro, explicabo
              optio facere aperiam ipsam obcaecati sunt fugiat nulla consectetur.
            </p>
        </div>
      </div>
    </>
  );
}
