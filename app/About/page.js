// import Image from "next/image";
// import Link from "next/link";
// import about1 from "@/public/about 1.png";
// import about2 from "@/public/about 2.png";

// const About = () => {
//   return <>
//     <section>
//       {/* First part  */}
//       <div className="flex flex-col  gap-6 pt-10  pl-10">
//         <div>
//           <div className="font-display text-xl text-[#163B32] pb-10 ">
//             THERAPISTS IN NEWBURY PARK, CA
//           </div>
//           <div className="font-display text-6xl text-[#000000] pt-10">
//             We’re here to help <br/>   
//             <span className="font-script  text-8xl text-[#8B0000] pr-5">
//               you  
//             </span> 
//             find solid ground <br/>again.
//           </div>
//           <div className="font-body text-sm text-[#000000] pt-10 pb-10">
//             Discover a transformative therapy experience with our dedicated,
//             <br/> specialized therapists.
//           </div>
//           <div>
//             <li className="font-body text-base sm:text-lg text-[#111111] pb-6 sm:pb-8 md:pb-10">
//               <Link href="/contact">
//                 Book An Appointment
//               </Link>
//           </li>
//           </div>

//         </div>
//         <div className="w-full md:w-1/2">
//           <Image
//             src={about1}
//             alt="Image Loading"
//             width={1000}
//             height={1000}
//             className="w-full h-[600px] rounded-[20px] pl-15 pb-10"
//           />
//         </div>
//       </div>

//       {/* Second part */}
//       <div className="flex flex-col gap-2  pt-10 pl-10 pb-20">
//         <div className="font-display text-6xl text-[#000000] pr-10 pb-10">
//           It seems like nobody else understands what you’re going through. 
//         </div>
//         <div className="font-body text-[#1A1A1A]  pr-30">
//           <span className="font-display text-4xl text-[#000000] pr-30 ">
//             You could be here as a parent, a spouse, or simply someone trying to navigate the things life has thrown your way.<br/><br/>
//           </span>
//           We know how frustrating it can be trying to make sense of your emotions and balance everyone else’s needs along with your own. Our expertise, lived experiences, and empathetic approach help our clients feel safe and understood in their challenges—no matter what they bring to the table.
//         </div>
//       </div>
//       <hr className="my-8 w-full border-t-4 border-[#8B0000] opacity-50" />

//       {/* Third Part */}
//       <div className="font-display text-5xl pt-20 pb-30 pl-20 ">
//         <span className="font-body text-xl pb-30">
//           OUR APPROACH <br /> <br /> <br />
//         </span>
//         We believe real change starts with understanding yourself,<br/>
//         but we know that’s not enough—you need to know  
//         <span className="font-script text-7xl text-[#8B0000] pr-5 pl-5">
//           how
//         </span> 
//         to <br/> make that change happen.
//       </div>
//       <hr className="my-8 w-full border-t-4 border-[#8B0000] opacity-50 pb-30" />

//       {/* Fourth part  */}
//       <div className="flex flex-col  gap-6 pt-10  pl-10">
//         <div className="font-body text-xl  pl-15">
//           <div className="text-[#000000]">
//             Together, we’ll tackle the specific challenges<br/> 
//             you're facing—conflict in your relationships,<br/>
//             stress at work, or feeling disconnected <br/>
//             from yourself or others.<br/>
//           </div>
//           <div className="text-lg font-normal">
//             <br/>
//             We know that no one else has lived your life as you, so we'll take <br/>
//             the time to understand your experience not just as therapists, but <br/>
//             as people who genuinely care. You don't need to have it all figured <br/>
//             out, you just need to be ready to take those first steps. When <br/>
//             everything else feels unsteady, we hope to be a place of safety <br/>
//             and stability in your life.
//             <br/>
//           </div>
//           <div>
//             <br/>
//             <li className="font-body text-base sm:text-lg text-[#111111] pb-6 sm:pb-8 md:pb-10">
//               <Link href="/contact">
//                 SCHEDULE NOW 
//               </Link>
//             </li>
//           </div>

//         </div>
//         <div className="w-full md:w-1/2">
//           <Image
//             src={about2}
//             alt="Image Loading"
//             width={1000}
//             height={1000}
//             className="w-full h-auto rounded-[20px] pl-15 pb-10"
//           />
//         </div>
//       </div>


//     </section>
//   </>;
// };

// export default About;

import Image from "next/image";
import Link from "next/link";
import about1 from "@/public/about 1.png";
import about2 from "@/public/about 2.png";

const About = () => {
  return <>
    <section>
      {/* First part  */}
      
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-6 pt-6 sm:pt-8 md:pt-10 lg:pt-10 pl-5 sm:pl-8 md:pl-10 lg:pl-10">
        <div>
          <div className="font-display text-lg sm:text-xl md:text-xl lg:text-xl text-[#163B32] pb-6 sm:pb-8 md:pb-10 lg:pb-10">
            THERAPISTS IN NEWBURY PARK, CA
          </div>
          <div className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-[#000000] pt-6 sm:pt-8 md:pt-10 lg:pt-10">
            We’re here to help <br/>   
            <span className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#8B0000] pr-2 sm:pr-3 md:pr-4 lg:pr-5">
              you  
            </span> 
            find solid ground <br/>again.
          </div>
          <div className="font-body text-sm sm:text-base md:text-base lg:text-sm text-[#000000] pt-6 sm:pt-8 md:pt-10 lg:pt-10 pb-6 sm:pb-8 md:pb-10 lg:pb-10 leading-relaxed">
            Discover a transformative therapy experience with our dedicated,
            <br/> specialized therapists.
          </div>
          <div>
            <li className="font-body text-base sm:text-lg text-[#111111] pb-6 sm:pb-8 md:pb-10">
              <Link href="/contact">
                Book An Appointment
              </Link>
          </li>
          </div>

        </div>
        <div className="w-full md:w-1/2">
        
          <Image
            src={about1}
            alt="Image Loading"
            width={1000}
            height={1000}
            className="w-full max-w-full h-auto min-h-[280px] sm:min-h-[350px] md:h-[500px] lg:h-[600px] object-cover rounded-[20px] pl-0 pb-6 sm:pb-8 md:pb-10 lg:pb-10"
          />
        </div>
      </div>
      

      {/* Second part */}
      <div className="flex flex-col  lg:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-2 pt-6 sm:pt-8 md:pt-10 lg:pt-10 pl-5 sm:pl-8 md:pl-10 lg:pl-10 pb-10 sm:pb-14 md:pb-16 lg:pb-20">
        <div className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-[#000000] pr-0 md:pr-5 lg:pr-10 pb-6 sm:pb-8 lg:pb-10">
          It seems like nobody else understands what you’re going through. 
        </div>
        <div className="font-body text-sm sm:text-base md:text-lg lg:text-base text-[#1A1A1A] pr-0 md:pr-10 lg:pr-30 leading-relaxed">
          <span className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-[#000000] pr-0 md:pr-10 lg:pr-30">
            You could be here as a parent, a spouse, or simply someone trying to navigate the things life has thrown your way.<br/><br/>
          </span>
          We know how frustrating it can be trying to make sense of your emotions and balance everyone else’s needs along with your own. Our expertise, lived experiences, and empathetic approach help our clients feel safe and understood in their challenges—no matter what they bring to the table.
        </div>
      </div>
      <hr className="my-8 w-full border-t-4 border-[#8B0000] opacity-50" />

      {/* Third Part */}
      <div className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-16 sm:pb-20 md:pb-24 lg:pb-30 pl-5 sm:pl-8 md:pl-10 lg:pl-20">
        <span className="font-body text-base sm:text-lg md:text-xl lg:text-xl pb-16 sm:pb-20 md:pb-24 lg:pb-30 px-5 sm:px-8 md:px-10 lg:px-0">
          OUR APPROACH <br /> <br /> <br />
        </span>
        We believe real change starts with understanding yourself,<br/>
        but we know that’s not enough—you need to know  
        <span className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-[#8B0000] pr-2 sm:pr-3 md:pr-4 lg:pr-5 pl-2 sm:pl-3 md:pl-4 lg:pl-5">
          how
        </span> 
        to <br/> make that change happen.
      </div>
      <hr className="my-8 w-full border-t-4 border-[#8B0000] opacity-50 pb-30" />

      {/* Fourth part  */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-6 pt-6 sm:pt-8 md:pt-10 lg:pt-10 pl-5 sm:pl-8 md:pl-10 lg:pl-10">
        <div className="font-body text-base sm:text-lg md:text-xl lg:text-xl pl-0 md:pl-8 lg:pl-15">
          <div className="text-[#000000]">
            Together, we’ll tackle the specific challenges<br/> 
            you're facing—conflict in your relationships,<br/>
            stress at work, or feeling disconnected <br/>
            from yourself or others.<br/>
          </div>
          <div className="text-base sm:text-lg md:text-lg lg:text-lg font-normal">
            <br/>
            We know that no one else has lived your life as you, so we'll take <br/>
            the time to understand your experience not just as therapists, but <br/>
            as people who genuinely care. You don't need to have it all figured <br/>
            out, you just need to be ready to take those first steps. When <br/>
            everything else feels unsteady, we hope to be a place of safety <br/>
            and stability in your life.
            <br/>
          </div>
          <div>
            <br/>
            <li className="font-body text-base sm:text-lg text-[#111111] pb-6 sm:pb-8 md:pb-10">
              <Link href="/contact">
                SCHEDULE NOW 
              </Link>
            </li>
          </div>

        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={about2}
            alt="Image Loading"
            width={1000}
            height={1000}
            className="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-auto object-cover rounded-[20px] pl-0 md:pl-5 lg:pl-15 pb-6 sm:pb-8 lg:pb-10"
          />
        </div>
      </div>


    </section>
  </>;
};

export default About;