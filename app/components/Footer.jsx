import "@/app/globals.css"
import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <hr className="border-t-1 border-[#163B32]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {/* Company side */}
                <div className="flex flex-col lg:flex-row ">
                    <div className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        🌿
                    </div>
                    <div className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-4xl ">
                        Conejo Valley
                        <br />
                        <span className="font-body text-[#718B78] text-xs tracking-[2px] sm:text-sm sm:tracking-[3px] md:tracking-[4px] lg:tracking-[5px]">
                            FAMILLY COUNCILLING
                        </span>
                        <p className="font-body text-[#444444] text-sm sm:text-base md:text-lg">
                            We want to make getting started simple.
                            You’re welcome to come into our office in
                            Newbury Park or schedule virtual
                            appointments from anywhere in CA—whatever
                            works best for you.
                        </p>
                    </div>
                </div>
                {/* Navigation side  */}
                <div className="pl-5 pr-5 sm:pl-8 sm:pr-8 md:pl-12 md:pr-12 lg:pl-20 lg:pr-5 pt-10">
                    <div className="pb-3 sm:pb-4 md:pb-5">
                        Navigate
                    </div>
                    <ul className="font-body text-[#444444] text-sm sm:text-base md:text-lg">
                        <li>
                            <Link href="/" >
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
                        <li>
                            <Link href="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Our team Content */}
                <div className="px-5 sm:px-8 md:px-12 lg:px-0 pt-10">
                    <div className="pb-2 sm:pb-3 md:pb-4">
                        Our Team
                    </div>
                    <br />
                    <li>
                        <Link href="#">
                            Dr. Maya Reynolds (Therapist)
                        </Link>
                    </li>

                </div>
                {/* Our contact content */}
                <div>
                    <div className="pb-3 sm:pb-4 md:pb-5 pt-10">
                        Contact Us
                    </div>
                    <div>
                        925 Broadbeck Dr <br />
                        Suites 200 and 225 <br />
                        Newbury Park, CA 91320 <br />
                        info@conejovalleycounseling.com <br />
                        805.242.3120 <br />
                        <br />
                        Serving Thousand Oaks, Westlake <br />
                        Village, Camarillo, Moorpark, & Simi Valley
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
