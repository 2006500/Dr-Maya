import "@/app/globals.css"
import Link from "next/link";

const Navigations = () => {
  return (
    <header className="pt-6 pb-6 sm:pt-8 sm:pb-8 md:pt-10 md:pb-10 lg:pt-12 lg:pb-12 xl:pt-16 xl:pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 " >
        <div className="flex flex-col sm:flex-row">
          <div className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            🌿
          </div>
          <div className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
            Conejo Valley
            <br/>
            <span className="font-body text-[#718B78] text-xs tracking-[2px] sm:text-sm sm:tracking-[3px] md:tracking-[4px] lg:tracking-[5px]"> 
              FAMILLY COUNCILLING
            </span>
          </div>
          
        </div>
        <div className="flex">
          <ul className="flex flex-col gap-3 sm:flex-row sm:gap-4 md:gap-6 font-body">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>

            <li>
              <Link href="/About">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/ourTeam">
                Our Team
              </Link>
            </li>
            
            <li>
              <Link href="/Q&A">
                FAQ
              </Link>
            </li>

            <li>
              <Link href="/services">
                Our Services
              </Link>
            </li>

            <li>
              <Link href="/office">
                Our Office 
              </Link>
            </li>

            <li className="text-[#B96643] text-sm sm:text-base md:text-lg">
              <Link href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-8 w-full border-t-4 border-[#8B0000] opacity-50" />
    </header>
  );
}

export default Navigations;