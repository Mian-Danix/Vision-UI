const ProfileInformation = () => {
  return (
    <section className="md:col-span-1 col-span-4  h-full w-full bg-cover rounded-2xl bg-gradient-to-br from-[rgb(2,6,28)] via-transparent to-[rgba(8,12,32,0.74)] backdrop-blur-[120px] transition-all duration-300  hover:shadow-[0_0_25px_5px_rgba(30,64,175,0.5)] lg:p-[1.5vw] p-4">
      <header>
        <h2 className="  md:text-[1vw] text-xs text-white  font-semibold ">
          Profile Information
        </h2>
        <h3 className="font-medium md:text-[.8vw] text-[12px]  md:my-[.75vw] my-2 text-gray-400">
          Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is
          no. If two equally difficult paths, choose the one more painful in the
          short term (pain avoidance is creating an illusion of equality).
        </h3>
        <div className="lg:h-[.15vw] h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent" />
        <h3 className="font-medium lg:text-[.85vw] text-[12px]  md:mt-[.75vw] mt-2 md:mb-[.4vw] mb-1 text-gray-400">
          Full Name: <span className="text-white">Mark Jhonson</span>
        </h3>
        <h3 className="font-medium lg:text-[.85vw] text-[12px]  md:my-[.4vw] my-1 text-gray-400">
          Mobile: <span className="text-white">(44) 123 1234 123</span>
        </h3>
        <h3 className="font-medium lg:text-[.85vw] text-[12px]  md:my-[.4vw] my-1 text-gray-400">
          Email: <span className="text-white">mark.zuckerberg@example.com</span>
        </h3>
        <h3 className="font-medium lg:text-[.85vw] text-[12px]  md:my-[.4vw] my-1 text-gray-400">
          Location:<span className="text-white">California, USA</span>
        </h3>
      </header>
    </section>
  );
};

export default ProfileInformation;
