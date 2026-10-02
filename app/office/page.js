import Image from "next/image";
import office1 from "@/public/Office 1.jpg";
import office2 from "@/public/Office 2.jpg";
import {
  ShieldCheck,
  LockKeyhole,
  Armchair,
  UserRound,
  MapPin,
  Video
} from "lucide-react";

const office = () => {
  return <>
    <div>
      {/* Our Office part */}
      <div className="flex flex-col md:flex-row gap-2 pt-6 md:pt-10">
        <div className="font-body text-sm text-[#404040] pt-5 md:pt-10 pl-5 md:pl-20 pr-5 md:pr-15">
          <span className="font-display text-xl md:text-2xl text-[#163B32]">
            OUR OFFICE <br />
          </span>
          <span className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-[#163B32]">
            A Calm Space For Healing . <br />
          </span>
          <br />
          Our office is designed to feel warm , welcoming and <br />
          peaceful--a space where you can feel safe, comfortable<br />
          and truly heard. Every detail has been chosen with your <br />
          Well being in mind, from the cozy seating to the calming <br />
          ambience , creating an environment that supports <br />
          reflection,growth and healing.
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={office1}
            alt="Image Loading"
            width={1000}
            height={1000}
            className="w-full h-auto rounded-[20px] 
           pr-0 md:pr-10 lg:pr-20 
           pb-5 md:pb-8 lg:pb-10"
          />
        </div>
      </div>
      {/* mid part */}
      <div className="rounded-2xl bg-[#E8E0CC] 
           shadow-[0_4px_20px_rgba(0,0,0,0.20)] 
           m-3 sm:m-5 md:m-7 lg:m-10 
           pt-5 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-13"> {/* flex div */}
          <div className="font-body text-sm text-[#404040] 
           pl-2 md:pl-5 lg:pl-10">
            {/* First part */}
            <div className="flex h-12 w-12 md:h-14 md:w-14 
           items-center justify-center 
           rounded-full bg-[#8B0000]">
              <ShieldCheck
                size={30}
                strokeWidth={1.8}
                className=" text-[#FFFFFF]"
              />
            </div>
            <span className="font-display font-bold text-2xl md:text-3xl text-[#163B32]">
              Safe and Supportive <br />
            </span>
            A non-judgmental space <br />
            Where you can be yourself .
          </div>

          <div className="font-body text-sm text-[#404040] 
           pl-2 md:pl-5 lg:pl-10">
            {/* Second part */}
            <div className="flex h-12 w-12 md:h-14 md:w-14 
           items-center justify-center 
           rounded-full bg-[#8B0000]">
              <LockKeyhole size={30} strokeWidth={1.8} className="text-[#FFFFFF]" />
            </div>
            <span className="font-display font-bold text-2xl md:text-3xl text-[#163B32]">
              Private and confidential <br />
            </span>
            Your privacy is always <br />
            our priority.
          </div>

          <div className="font-body text-sm text-[#404040] 
           pl-2 md:pl-5 lg:pl-10">
            {/* Third part */}
            <div className="flex h-12 w-12 md:h-14 md:w-14 
           items-center justify-center 
           rounded-full bg-[#8B0000]">
              <Armchair size={30} strokeWidth={1.8} className="text-[#FFFFFF]" />
            </div>
            <span className="font-display font-bold text-2xl md:text-3xl text-[#163B32]">
              Comfortable Environment <br />
            </span>
            A calm,cozy space designed <br />
            for your comfort.
          </div>

          <div className="font-body text-sm text-[#404040] 
           pl-2 md:pl-5 lg:pl-10">
            {/* Fourth part */}
            <div className="flex h-12 w-12 md:h-14 md:w-14 
           items-center justify-center 
           rounded-full bg-[#8B0000]">
              <UserRound size={30} strokeWidth={1.8} className="text-[#FFFFFF]" />
            </div>
            <span className="font-display font-bold text-2xl md:text-3xl text-[#163B32]">
              In-Person & Hybrid Sessions <br />
            </span>
            Choose what works best <br />
            for you.
          </div>
        </div>
      </div>

      {/* Third part */}
      <div className="flex flex-col md:flex-row gap-2 pt-6 md:pt-10">
        <div className="w-full md:w-1/2">
          <Image
            src={office2}
            alt="Image Loading"
            width={1000}
            height={1000}
            className="w-full h-auto rounded-[20px] 
           px-5 md:px-10 lg:px-20 
           pb-5 md:pb-8 lg:pb-10"
          />
        </div>
        <div className="font-body text-sm text-[#404040] ">
          <span className="font-display text-lg md:text-xl text-[#163B32]">
            VISIT OUR OFFICE <br />
          </span>
          <span className="font-display font-bold 
           text-4xl md:text-5xl lg:text-6xl 
           text-[#163B32]">
            Located in the heart of <br />
            Conejo Valley <br />
          </span>
          <br />
          Our office is conveniently located in Conejo Valley,making it <br />
          easy to access from nearby arears. Whether you,re coming in <br />
          person or joining virtually, we're here to supprt you.<br />
          <div className="flex flex-row gap-1 pt-1 pb-1">

            <div className="flex h-9 w-9 md:h-10 md:w-10 
           items-center justify-center 
           rounded-full bg-[#8B0000]">
              <MapPin
                size={21}
                strokeWidth={1.8}
                className="text-white"
              />
            </div>

            <div className="pt-2 text-[#163B32] font-bold 
           text-lg md:text-xl font-display">
              123th Street 45 W, Santa Monica, CA 90401
            </div>
          </div>

          <div className="flex flex-col-2 gap-1 pt-1 pb-1">

            <div className="flex h-9 w-9 md:h-10 md:w-10 
           items-center justify-center 
           rounded-full bg-[#8B0000]">
              <Video
                size={21}
                strokeWidth={1.8}
                className="text-white"
              />
            </div>

            <div className="pt-2 text-[#163B32] font-bold 
           text-lg md:text-xl font-display">
              In person & Hybrid Session.
            </div>
          </div>

        </div>
      </div>

    </div>
  </>;
};

export default office;

