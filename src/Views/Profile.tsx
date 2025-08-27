import { FaArrowRight } from "react-icons/fa6";
import CarInformation from "../COMPONENT/Car";
import ProfileInformation from "../COMPONENT/Profileinformation";
import PlatformSettings from "../COMPONENT/Plateform";
import Profileproject from "../COMPONENT/Profileproject";
import UserProfileHeader from "../COMPONENT/ProfileHeader";

const Profile = () => {
  return (
    <section className="grid grid-cols-4  md:gap-[.75vw] gap-2">
      <UserProfileHeader
        userEmail="jonson@gmail.com"
        userName="Mark Jonson"
        avatarUrl="mark.png"
      />
      <div className="lg:col-span-1 col-span-4 bg-[url('/bg.png')]  hover:shadow-[0_0_25px_5px_rgba(30,64,175,0.5)] bg-cover hover: bg-center rounded-2xl shadow-xl md:p-[1.75vw] p-6  flex flex-col justify-between md:aspect-square aspect-video">
        <div className="space-y-2">
          <h1 className="text-white  md:text-[1.5vw] text-2xl md:text-3xl font-bold">
            Welcome back!
          </h1>
          <p className="text-white  md:text-[1.1vw] text-sm md:text-sm">
            Nice to see you, Mark Johnson! <br />
          </p>
        </div>
        <div className="flex items-center  md:gap-[.75vw] gap-2 text-white  md:text-[1.5vw] text-2xl hover:text-white transition">
          <p className="md:text-[1.1vw] text-sm">Turn on your car</p>
          <FaArrowRight />
        </div>
      </div>
      <CarInformation />
      <ProfileInformation />
      <PlatformSettings />
      <Profileproject />
    </section>
  );
};

export default Profile;
