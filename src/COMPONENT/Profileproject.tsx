const Profileproject = () => {
  return (
    <div className=" rounded-2xl md:col-span-3  col-span-4 shadow-2xl md:p-[1.25vw] p-4 w-full bg-gradient-to-br from-[rgb(2,6,28)] via-transparent to-[rgba(8,12,32,0.74)] backdrop-blur-[120px] transition-all duration-300  hover:shadow-[0_0_25px_5px_rgba(30,64,175,0.5)]">
      <h2 className="lg:text-[1vw]  md:text-[1vw] text-lg text-white  font-semibold ">
        Projects
      </h2>

      <h3 className="font-medium lg:text-[.85vw] text-[12px] md:my-[.75vw] md:mt-[.75vw] mt-2 md:mb-[.4vw] mb-1 text-gray-400">
        Architects design houses
      </h3>
      <section className="grid grid-cols-3  md:gap-[1.25vw] gap-4">
        <div className="md:col-span-1 col-span-3 hover:bg-[#ffffff0f] md:p-[.75vw] p-2 rounded-lg">
          <img
            src="car.jpg"
            alt=""
            className="rounded-lg aspect-video w-full"
          />
          <h3 className="font-medium lg:text-[.85vw] text-[12px] md:my-[.4vw] my-1 text-gray-400">
            Project #1
          </h3>
          <h2 className="lg:text-[1vw]  md:text-[1.4vw] text-lg font-bold text-white   ">
            Modern
          </h2>
          <h3 className="font-medium lg:text-[.85vw] text-[12px]  md:mt-[.75vw] mt-2  text-gray-400">
            As Uber works through a huge amount of internal management turmoil.{" "}
          </h3>
          <div className="flex justify-between items-center md:mt-[.75vw] mt-2">
            <button className="text-white border border-white rounded-md  md:py-[.4vw] py-1 md:px-[1.25vw] px-4 md:text-[1vw] text-base">
              VIEW ALL
            </button>
            <img src="Members.png" alt="" className="md:w-[5vw]" />
          </div>
        </div>
        <div className="md:col-span-1 col-span-3 hover:bg-[#ffffff0f] md:p-[.75vw] p-2 rounded-lg">
          <img
            src="Image.png"
            alt=""
            className="rounded-lg w-full aspect-video "
          />
          <h3 className="font-medium lg:text-[.85vw] text-[12px] md:my-[.4vw] my-1 text-gray-400">
            Project #2
          </h3>
          <h2 className="lg:text-[1vw]  md:text-[1.4vw] text-lg font-bold text-white   ">
            Scandinavian
          </h2>
          <h3 className="font-medium lg:text-[.85vw] text-[12px]  md:mt-[.75vw] mt-2  text-gray-400">
            Music is something that every person has his or her own specific
            opinion about.
          </h3>
          <div className="flex justify-between items-center md:mt-[.75vw] mt-2">
            <button className="text-white border border-white rounded-md  md:py-[.4vw] py-1 md:px-[1.25vw] px-4 md:text-[1vw] text-base">
              VIEW ALL
            </button>
            <img src="Members.png" alt="" className="md:w-[5vw]" />
          </div>
        </div>
        <div className="md:col-span-1 col-span-3 hover:bg-[#ffffff0f] md:p-[.75vw] p-2 rounded-lg">
          <img
            src="car.jpg"
            alt=""
            className="rounded-lg aspect-video w-full"
          />
          <h3 className="font-medium lg:text-[.85vw] text-[12px] md:my-[.4vw] my-1 text-gray-400">
            Project #3
          </h3>
          <h2 className="lg:text-[1vw]  md:text-[1.4vw] text-lg font-bold text-white   ">
            Minimalist
          </h2>
          <h3 className="font-medium lg:text-[.85vw] text-[12px]  md:mt-[.75vw] mt-2  text-gray-400">
            Different people have different taste, and various types of music.
          </h3>
          <div className="flex justify-between items-center md:mt-[.75vw] mt-2">
            <button className="text-white border border-white rounded-md  md:py-[.4vw] py-1 md:px-[1.25vw] px-4 md:text-[1vw] text-base">
              VIEW ALL
            </button>
            <img src="Members.png" alt="" className="md:w-[5vw]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profileproject;
